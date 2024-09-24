require('dotenv').config();
const express=require('express')
const model=require('./models/projectModels')
const app = express()
app.use(express.json())
const dpconnect=require('./config/db')
const port=process.env.PORT || 7778

app.get( '/',(res,req)=>
{
    res.json({message:"welcome to Express"})
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)  // server is listening on port 7778
})