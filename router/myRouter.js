//จัดการ Routing
const express = require('express')
const router = express.Router()
const path = require('path')

//เรียกใช้งาน model product DB
const Product = require('../model/products')

//อัพโหลดไฟล์
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(nuul,'./public/images/products') // ตำแหล่งจัดเก็บไฟล์
    },filename:function(req,file,cb){
            cb(null,Date.now()+".jpg")//เปลี่ยนชื่อไฟล์ ป้องกันชื่อซ้ำกัน
    }
})
//เริ่มต้นการอัพโหลด
const upload = multer({
    storage:storage
})

// ให้เลือกใช้คำสั่งใดคำสั่งหนึ่งเวลา run server โดยใช้ cookies or session
router.get('/add-product',(req,res)=>{
//     if(req.cookies.login){
//         res.render('form')  //บันทึกรายการ
//     }else{
//         res.render('admin') //เข้าสู่ระบบ
//     }

        if(req.session.login){
            res.render('form')  //บันทึกรายการ
        }else{
            res.render('admin') //เข้าสู่ระบบ
        }
        // res.render('admin')
})

router.get('/',(req, res)=>{
    // const name = "Bryan"
    // const age = 17
    // const address = "<h3>buriram</h3>"
    // res.render('index.ejs',{name:name, age:age, address:address})

    // ==============OOP Array============
    // const products = [           //ข้อมูลตัวอย่าง
    //     {name:"โน๊ตบุ๊ค", price:25000,image:"images/products/product1.png"},
    //     {name:"เสื้อ", price:200,image:"images/products/product2.png"},
    //     {name:"หูฟัง", price:500,image:"images/products/product3.png"},
    //     {name:"การ์ดจอ", price:35000,image:"images/products/product1.png"},
    //     {name:"กางเกง", price:600,image:"images/products/product2.png"},
    //     {name:"เมาส์", price:900,image:"images/products/product3.png"}
    // ]

    Product.fild().exec((err,doc)=>{
        res.render('index',{products:doc})
    })
   //res.render('index',{products:products})    //แสดงข้อมูลตัวอย่าง
    //res.render('index.ejs')
})

router.get('/add-product',(req,res)=>{
    res.render('form')
})

// ให้เลือกใช้คำสั่งใดคำสั่งหนึ่งเวลา run server โดยใช้ cookies or session
router.get('/manage',(req,res)=>{
    // if(req.cookies.login){
    //     Product.fild().exec((err,doc)=>{
    //       res.render('manage',{products:doc})
    // })
    // }else{
    //     res.render('admin')
    // }
   
    // Product.fild().exec((err,doc)=>{
    //     res.render('manage',{products:doc})
    // })

    //แสดงข้อมูล session
    if(req.session.login){
            Product.find().exec((err,doc)=>{
            res.render('manage',{products:doc})
        })
        }else{
            res.render('admin')
        }

    //แสดงข้อความผ่านทาง server
    // console.log("รหัส session = ",req.sessionID)
    // console.log("ข้อมูลใน session = ",req.session)

    // Product.find().exec((err,doc)=>{
    //     res.render('manage',{products:doc})
    // })
    res.render('manage')
})

router.get('/delete/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id,{useFindAndModify:fales}).exec(err=>{
        if(err) console.log(err)
            res.redirect('/manage')
    })
})

router.get('/product',(req,res)=>{
    res.render('product')
})
router.get('/404',(req,res)=>{
    res.render('404')
})

//รับข้อมูล
router.post('/insert',upload.single("image"),(req,res)=>{
    console.log(req.file);
    // console.log(req.body.name);
    // console.log(req.body.price);
    // console.log(req.body.image);
    // console.log(req.body.detail);

    let data = new Product({  
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
        detail:req.body.detail
    })
    Product.save(data,(err)=>{
        if(err) console.log(err)
        res.redirect('/')
    })
    // res.render('form')
})

//ค้นหาข้อมูลผ่าน ID
router.get('/:id',(req,res)=>{
    const product_id = req.params.id
    console.log(product_id)
    Product.fildOne({_id:product_id}).exec((err,doc)=>{
        res.render('product',{product:doc})
    })
})

//ออกจากระบบ
// ให้เลือกใช้คำสั่งใดคำสั่งหนึ่งเวลา run server โดยใช้ cookies or session
router.get('/logout',(req,res)=>{
    // ทำงานด้วย cookie
    // res.clearCookie('username')
    // res.clearCookie('password')
    // res.clearCookie('login')
    // res.redirect('/manage')

    //ทำงานด้วย session
    req.session.destroy((err)=>{
        res.redirect('/manage')
    })

})

// //static files
// router.get("/home"||"/",(req, res)=>{
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(path.join(__dirname,"../templates/index.html"))
// })

// router.get("/product/:id",(req,res)=>{
//     res.status(200)
//     res.type('text/html')
//     const productID = req.params.id
//     if(productID === "1"){
//         res.sendFile(path.join(__dirname,"../templates/product1.html"))
//     }else if(productID === "2"){
//         res.sendFile(path.join(__dirname,"../templates/product2.html"))
//     }else if(productID === "3"){
//         res.sendFile(path.join(__dirname,"../templates/product3.html"))
//     }else{
//         res.redirect('/')          //ถ้า path ไม่ตรงกับที่มีจะกลับไปหน้าแรก
//     }
// })

//แก้ไขข้อมูล
router.post('/edit',(req,res)=>{
    const edit_id = req.body.edit_id
    Product.findOne({_id:edit_id}).exec((err,doc)=>{
        //นำข้อมูลเดิมที่ต้องการแก้ไขไปแสดงบนแบบฟอร์ม
        res.render('edit.ejs',{product:doc})
    })  
    
})

//อัพเดทรายการ
router.post('/update',(req,res)=>{
    //ข้อมูลใหม่ที่ถูกส่งมาจากฟอร์มแก้ไขรายการ
    const update_id = req.body.update_id
    let data = {  
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
        detail:req.body.detail
    }
    Product.findByIdAndUpdate(update_id,data,{useFindAndModify:false}).exec(err=>{
        res.redirect('/manage')
    })
})
 
//สร้างคุกกี้เมื่อมีการเข้าสู่ระบบ
router.post('/login',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const timeExpire = 60000 // 60วิ

    //การใช้งานด้วย cookie
    // if(username === "admin" && password === "1234"){
    //     res.cookie('username',username,{maxAge:timeExpire})
    //     res.cookie('password',password,{maxAge:timeExpire})
    //     res.cookie('login',true,{maxAge:timeExpire}) // true => login สำเร็จ เข้าสู่ระบบ
    //     res.redirect('/manage')
    // }else{
    //     res.render('404')
    // }

    // สร้าง session
    if(username === "admin" && password === "1234"){
        //สร้าง session
        req.session.username = username
        req.session.password = password
        req.session.login = true // true => login สำเร็จ เข้าสู่ระบบ
        req.session.cookie.maxAge=timeExpire
        res.redirect('/manage')
    }else{
        res.render('404')
    }
})



module.exports = router