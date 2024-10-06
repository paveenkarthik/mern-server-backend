require('dotenv').config();
const express=require('express')
const cors=require('cors')
const dpconnect=require('./config/db')
const app = express()
const Project=require("./router/projectroute")
const Users=require("./router/userRoute")
app.use(express.json())

app.use(cors())

const port=process.env.PORT || 7778
app.use("/projects", Project)
app.use("/users", Users)
app.get( '/',(req,res)=>
{
    res.json({message:"welcome to Express"})
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)  // server is listening on port 7778
})