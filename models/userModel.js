const mongoose = require('mongoose');
const folioschema=new mongoose.Schema(
{
    name:{
        type: String,
        required: true
    },
    about: {
        type: String, 
        required: true
    },
    image:
    {
        type: String,
        required: true
    }
}
);


const User=mongoose.model('Home',folioschema)
module.exports = User;