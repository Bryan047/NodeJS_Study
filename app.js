const express = require('express')
//const router = require('./router/myRouter.js')
const path = require('path')
const cookieParser = require('cookie-parser')
const sesstion = require('express-session')
const router = require('./router/myRouter')             //ejs router
const app = express()

//เรียกใช้งาน
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(cookieParser())
app.use(sesstion({secret:"mysession",resave:false,saveUninitialized:false}))
app.use(express.urlencoded({extended:false }))
app.use(router)

app.use(express.static(path.join(__dirname,'public')))  //อ้างอิงแบบ static



//อ่างอิงตำแหน่งไฟล์
// const indexpage = path.join(__dirname,"templates/index.html")

// app.get("/",(req, res)=>{
//     res.status(200)                                                  //วิธีเขี่ยนอีกแบบ
//     res.type('text/html')
//     res.sendFile(indexpage)
// })
// app.get("/",(req, res)=>{
//     res.status(200)
//     res.type('text/html')                                            //วิธีเขี่ยนอีกแบบ
//     res.sendFile(path.join(__dirname,"../templates/index.html"))
// })

//app.use(router)

app.listen(7000,()=>{
    console.log('start server in port 7000')
})