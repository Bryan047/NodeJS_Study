// const http = require('http')
// const fs = require('fs')
// const url = require('url')
// const express = require('express')

// const indexPage = fs.readFileSync(`${__dirname}/templates/index.html`,'utf-8')
// const productPage1 = fs.readFileSync(`${__dirname}/templates/product1.html`,'utf-8')
// const productPage2 = fs.readFileSync(`${__dirname}/templates/product2.html`,'utf-8')
// const productPage3 = fs.readFileSync(`${__dirname}/templates/product3.html`,'utf-8')


// http.createServer((req,res)=>{   

//     const{pathname, query} = url.parse(req.url,true)

//     //console.log(url.parse(req.url,true))                                //เรีัยกใช้งาน url
//    // const pathName = req.url
//     // console.log("url = ",pathName)                                   //แสดง pathName
//     if(pathname === "/" || pathname==="/home"){
//         // const myhtml=`
//         // <h1>Home Page</h1>
//         // <p style="color:green">nodejs for beginner | 2025</p> `                //การเขียนแบบ arrow function  
//     // // res.write(myhtml)                            //const server = http.createServer(function(req,res){...})
//         res.end(indexPage)
//     }else if(pathname==="/product"){
//         //สินค้าชิ่นที่ 1
//         if(query.id === "1"){
//             res.end(productPage1)
//         }else if(query.id === "2"){
//             res.end(productPage2)
//         }else if(query.id === "3"){
//             res.end(productPage3)
//         }else{
//             res.writeHead(404)
//             res.end("<h1>404 Not Found!!</h1>")
//         }
        
//         //res.end(productPage)                                              //แสดง productPage
//     }else{
//         res.writeHead(404)
//         res.end("<h1>404 Not Found</h1>")
//     }
//     // const myhtml=`
//     //     <h1>Hello i'm Bryan</h1>
//     //     <p style="color:green">nodejs for beginner | 2025</p> `                //การเขียนแบบ arrow function  
//     // // res.write(myhtml)                            //const server = http.createServer(function(req,res){...})
//     // res.end(myhtml)
// }).listen(7000,'localhost',()=>{
//     console.log("start server in port 7000")
// })

// //การเขียนอีกแบบ
// // const server = http.createServer((req,res)=>{                       //การเขียนแบบ arrow function  
// //     res.write("<h1>Hello i'm Byan</h1>")                            //const server = http.createServer(function(req,res){...})
// //     res.end()
// // })

// // server.listen(7000,()=>{
// //     console.log("start server in port 7000")
// // })