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
Router.post('/add',async (req, res)=>{
    try{
        const newproject=new projects(req.body)
        const { title, desc } = newproject
        if (!title ||!desc) {
            res.status(400).json({ message: "both fiels are required" })
        }
        const sdata=await newproject.save()
        res.status(201).json(sdata)
    }
    
    catch(error){
        res.status(500).json(error)
    }
}
)
module.exports=Router