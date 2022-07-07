const express = require('express');
const User = require('../models/User.js');
// ! to check whether req.body content satisfies all the required parameters or not
const { body, validationResult } = require('express-validator');
const router = express.Router();

const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// ?well we will get this jwt secret from a secure place later on but for now let's just hard code it
const JWT_SECRET = 'mohitcreatinglostandfound';

const fetchuser = require('../middleware/fetchuser')



// !Create a new user
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 5 }),
    // ? Doubt area whether institute id considered to be valid gmail id..
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter at least a 5 character password').isLength({ min: 5 })
], async (req, res) => {

    const errors = validationResult(req);
    let success = false;
    /* this will come in if there are some errors regarding our user inputs.*/
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            res.status(404).send("Account with the similar emial id already exists.");
        }

        // !Creating the webtoken from here on.
        // generating the salt to make our password even more stronger
        const salt = await bcrypt.genSalt(10);

        // generating the hash from the password.
        const secPass = await bcrypt.hash(req.body.password, salt);

        // ! this is the part where we are adding user information into database
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        });

        // !The data to be used in signing our web token is here

        const data = {
            user: {
                id: user.id
            }
        }
        // ! Signing the web token with payload and our secret code.
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ success: true, authtoken });

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }

})

// ! Login User
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Cannot enter a blank password').exists()
], async (req, res) => {

    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, error: "please try to login with correct credentials1" })
        }

        // !  converting the hash code that is our user.password into normal terms and comparing it with the req.body.password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "please try to login with correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ success: true, authtoken })

    }catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }

})


//! Get user data using auth-token thing
router.get('/getuser',fetchuser,async (req,res)=>{
    try {
        userId = req.user.id;
        // All data except the user password is getting selected here
        const user = await User.findById(userId).select("-password");
        res.send(user);
    
    } catch (error) {
        console.log(error);
        res.status(404).send("Internal server side error");
    }
})
module.exports = router
