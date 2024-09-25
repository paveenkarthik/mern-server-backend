const express = require('express');
const Router = express.Router();
const projects=require('../models/folioModule')

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

Router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentrecord = await projects.findOne({ _id: id })
        if (!currentrecord) {
           res.status(404).json({ message: "Project not found" })
        }
        const updatedproject = await projects.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updatedproject)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

Router.delete('/delete/:id', async (req, res) => {
  
    try {
        const id = req.params.id
        const currentrecord = await projects.findOne({ _id: id })
        if (!currentrecord) {
             res.status(404).json({ message: "Project not found" })
        }
        const deletedproject = await projects.findByIdAndDelete(id)
        res.status(200).json({ message: "Project deleted successfully" })
        
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports=Router


// const express = require('express');

// const router = express.Router();
// const project=require('../models/folioModule')

// router.get('/add',async (req, res) => {
//     try{
//         const fetchedproject = await project.find()
//         res.status(200).json(fetchedproject)
//     }
//     catch (error){
//         res.status(500).
//     }
       
// })