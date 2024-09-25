const mongoose=require('mongoose');
const projects=new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true
        },
        coverimg: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: false,
        },
        git: {
            type: String,
            required: true,
        }
    }
)
const Project=mongoose.model("project",projects);
module.exports=Project;