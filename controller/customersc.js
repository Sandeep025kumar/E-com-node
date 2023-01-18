const mongoose = require('mongoose');
const customerSchema = require('../module/customers');
const bcrypt = require('bcrypt');
const customerSchemas = async(req,res)=>{
    const hashPass = await bcrypt.hash(req.body.password,7);
    try {
        const data = new customerSchema({
             ...req.body,password:hashPass
        })
        const saveData = await data.save();
        res.json(saveData);
    } catch (error) {
        res.json(error)
    }
    
}
const getData = async(req,res)=>{
    const data = await customerSchema.find({},{ password:0});
    res.json(data);

}
module.exports = {customerSchemas,getData}