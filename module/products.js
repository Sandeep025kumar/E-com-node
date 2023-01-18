const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    gst_percentage:{
        type:String,
        required:true
    },
    created_date:{
        type:Date,
        default:Date.now
    },
    product_description:{
        type:String,
    },

})
module.exports = mongoose.model("products",productSchema);