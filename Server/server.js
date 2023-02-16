const express = require ("express");
const cors = require('cors')
const connectDatabase = require('./src/config/connectDb')
require("dotenv").config()
const app = express();
const PORT = process.env.PORT||8888;

app.use(express.json())

app.use(cors());

app.use('/',(req, res)=>{
    res.send("hello")
})

connectDatabase()

app.listen(PORT,function(){
    console.log(`Server running at ${process.env.CLIENT_URL}${PORT}`);
})