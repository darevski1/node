const express = require('express')
const User = require('./../models/User')

// @ User Controller
module.exports = {
    // Get all blog post 

    index: ('/', async (req, res) => {

        const users = await User.findAll()
        res.send({
            title: "This is list of all user in the system",
            users: users

        })
    })


}