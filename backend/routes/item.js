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
            Description:req.body.Description,
            GoogleDriveLink: req.body.GoogleDriveLink,
            User: req.user.id,
            Tag: req.body.Tag,
            Place: req.body.Place,
            Time: req.body.Time,
            Record_date: req.body.Record_date,
            Contact_No: req.body.Contact_No,
            Status:req.body.Status,
            Category:req.body.Category
        });

        res.json({ success: true, result: "Item successfully added into the List",item });

    } catch (error) {
        res.status(404).json({ success: false, msg: 'Internal Server Side error',error })
    }
})
module.exports = router