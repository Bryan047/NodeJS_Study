//Non-Blocking
const fs=require('fs')

//อ่านไฟล์ input.txt
fs.readFile("basic104 non_blocking/myfile/input.txt", 'utf-8',(err,data)=>{                 //อ่านไฟล์
    if(err) return console.log("Read File is worng ", err)
    const outputText = `hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ${new Date()}`
    fs.writeFile("basic104 non_blocking/myfile/output.txt",outputText,err=>{                 //เขียนไฟล์
        if(err) return console.log("Write File is worng ", err)
    console.log("conplease")
    })
    console.log(data)
})
