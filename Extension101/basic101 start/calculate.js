//callback function
function calculate(x,y,callback){
    console.log("กำลังคำนวณ....")
    setTimeout(()=>{
        const sum = x+y
        callback(sum)
    },3000)
}

// function display(result){
//     console.log(`ผลบวก = ${result}`)
// }
//ฟังชั่นปกติ
// const sum = calculate(100,55)
// display(sum);

//callback function
calculate(100,55,function(result){
    console.log(`ผลบวก = ${result}`)
})