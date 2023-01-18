const productSchema = require('../module/products');
const dataSchema = async(req,res)=>{
    try {
        const data = new productSchema({
             ...req.body
        })
        const saveData = await data.save();
        res.json(saveData);
    } catch (error) {
        res.json(error)
    }
    
}
const getOneData = async(req,res)=>{
    const data = await productSchema.find({"created_date":{$lt:new Date(),$gt:new Date(new Date().getTime()-(24*60*60*1000))}});
    res.json(data);

}
module.exports = {dataSchema,getOneData};