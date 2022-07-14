const express = require('express');
const Item = require('../models/Item.js');
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const router = express.Router();

// here we are adding the item to our database
router.post("/additem", fetchuser, [
    body('Item_Name', 'Enter a valid name').isLength({ min: 5 }),
    body('Tag', 'Enter a valid tag').exists(),
    body('Place', 'Enter a Valid place Name').isLength({ min: 8 }),
    body('Time', 'Please Input Time and Date').exists(),
    //? check whether the entered number is a correct phone number or not...
    body('Contact_No', 'Enter a valid contact number').isMobilePhone(),
    body('Status', 'Enter current status of the Item').exists(),
    body('Category', 'Lost / Found').exists(),
], async (req, res) => {


    try {
        //? Future Scope :--> Here I check whether same kind of item has ever registered before or not.
        const errors = validationResult(req);
        let success = false;
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let item = await Item.create({
            Item_Name: req.body.Item_Name,
            Description: req.body.Description,
            GoogleDriveLink: req.body.GoogleDriveLink,
            User: req.user.id,
            Tag: req.body.Tag,
            Place: req.body.Place,
            Time: req.body.Time,
            Record_date: req.body.Record_date,
            Contact_No: req.body.Contact_No,
            Status: req.body.Status,
            Category: req.body.Category
        });

        res.json({ success: true, result: "Item successfully added into the List", item });

    } catch (error) {
        res.status(404).json({ success: false, msg: 'Internal Server Side error', error })
    }


})

router.get('/fetchalluseritems', fetchuser, async (req, res) => {
    // our middleware fetchuser has put req.user=data.user
    try {

        // this will give all the items corresponding tothe user.id
        const items = await Item.find({ User: req.user.id })
        res.json(items)

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
})


// fetch all the available items in the collection
router.get('/', async (req, res) => {
    // our middleware fetchuser has put req.user=data.user
    try {

        // this will give all the items corresponding tothe user.id
        const items = await Item.find();
        res.json(items)

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
})


router.put('/updateitem/:id', fetchuser, async (req, res) => {
    const { Item_Name, Description, Tag, Place, Time, Contact_No, Status, Category, GoogleDriveLink } = req.body;
    const newitem = {};


    //!do it using a loop  write less write effective
    if (Item_Name) { newitem.Item_Name = Item_Name }
    if (Description) { newitem.Description = Description }
    if (Tag) { newitem.Tag = Tag }
    if (Place) { newitem.Place = Place }
    if (Time) { newitem.Time = Time }
    if (Contact_No) { newitem.Contact_No = Contact_No }
    if (Status) { newitem.Status = Status }
    if (Category) { newitem.Category = Category }
    if (GoogleDriveLink) { newitem.GoogleDriveLink = GoogleDriveLink }

    // Find the item to be updated and update it
    let item = await Item.findById(req.params.id);
    if (!item) {
        res.status(404).send("Not found ");
    }

    try {
        //checking whether the user trying to update the item is the same as the one who created it.
        if (item.User.toString() !== req.user.id) {
            res.status(401).send("Not Allowed");
        }
        item = await Item.findByIdAndUpdate(req.params.id, { $set: newitem }, { new: true })
        res.json({ success: true, result: "Item successfully updated", item });

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
})


// deleting the item
router.delete('/deleteitem/:id', fetchuser, async (req, res) => {
    let item = await Item.findById(req.params.id);
    if (!item) {
        res.status(404).send("Not found ");
    }
    
    try {
        //checking whether the user trying to update the note is the same as the one who created it.
        if (item.User.toString() !== req.user.id) {
            res.status(401).send("Not Allowed");
        }

        item = await Item.findByIdAndDelete(req.params.id);
        res.json({ success: true, result: "Item successfully deleted", item });

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
})
module.exports = router