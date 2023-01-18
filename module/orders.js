const mongoose = require('mongoose');
const ordersSchema = new mongoose.Schema({
     user_id:{
        type:Number,
        required:true,
        unique:true
     },
     name:{
        type:String,
        required:true,
     },
     mobile:{
        type:Number,
        required:true,
     },
     total_price:{
        type:String,
        required:true,
     },
     order_date:{
        type:String,

     },
     products_name:{
        type:String,
     }
})
module.exports = mongoose.model('orders',ordersSchema)