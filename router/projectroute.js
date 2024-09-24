const express = require('express');
const Router = express.Router();
const projects=require('../models/projectModels')

Router.get('/all',async (req, res)=>{
    try {
        const fetcheddetails = await projects.find()
        res.json(fetcheddetails).status(200)
    } catch (error) {
        res.json(error).status(404);
    }
})