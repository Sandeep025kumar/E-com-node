const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const mongoose = require('mongoose');
const { json } = require('express');
const router = require('./router/customers1');
const {PORT,DB} = process.env;
mongoose.connect(DB)
.then(()=>{
    console.log("Db connected successfully");
}).catch((err)=>{
    console.log("Db is not connected",err);
})
app.use(express.json());
app.use(cors());
app.use('/api',router)
app.listen(PORT,()=>{
    console.log("server is running on port:",PORT);
})
