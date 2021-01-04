const express = require('express')
const Project = require('./../models/Project')


module.exports = {
    index: ('/', async (req, res) => {
        const project = await Project.findAll();
        res.send({
            // title: "This is list of projects in the system user in the system",
            items: project,
        })
    })
}
