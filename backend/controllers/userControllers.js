const asyncHandler = require('express-async-handler');//import
const User = require('../models/userModel');//import


const registerUser = asyncHandler(async (req, res) => { //asyncHandler => for handle our error
    const { name, email, password, pic } = req.body;

    // check if user is exist 
    const userExist = await User.findOne({ email });  //findOne is mongodb query for find data in database

    // if it throw new error 
    if (userExist) {
        res.status(400);
        throw new Error("Email already exists");
    }

    // Create and save the user in DB
    const user = await User.create({ //create is mongodb query for create data in database
        name, email, password, pic,
    });

    if (user) { // if it true then we get all of this data
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin, //for check user is exist or not 
            pic: user.pic
        });
    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    }

});
module.exports = { registerUser };