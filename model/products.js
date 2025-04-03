// ใช้งาน mongoose
const mongoose = require('mongoose')

// เชื่อมต่อ mongoDB 
const dbUrl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err=>console.log(err))

// ออกแบบ schema
let productSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    detail: String
})

// สร้างโมเดล
let Product = mongoose.model("products",productSchema)

//ส่งออกโมเดล
module.exports = Product

//ออกแบบฟังชั่นสำหรับบันทึกข้อมูล
module.exports.save=function(model,data){
    model.save(data)
}