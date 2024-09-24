const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURL || "mongodb+srv://ram:qwerasdfzxcv@cluster.bnnkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")

const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log('DB connected');
})


connection.on('error',()=>{
    console.log('Error');
})

module.exports = mongoose