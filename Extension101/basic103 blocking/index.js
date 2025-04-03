//Blocking
const fs=require('fs')

//อ่านไฟล์ input.txt
const data = fs.readFileSync('./basic103 blocking/myfile/input.txt','utf-8')

console.log(data)
console.log("จบการทำงาน")

//เขียนfile

const outputText = `Hello Node.js \n${data}\n ไฟล์ถูกเขียนเมื่อ ${new Date()}`
fs.writeFileSync('./basic103 blocking/myfile/output.txt',outputText);
console.log("เขียนไฟล์เรียบร้อยแล้ว")