//สร้าง promise

const connect = true //เช็คการเชื่อมต่อ
const url1="Bryan.dev/file1.json"
const url2="arnon.dev/file2.json"
const url3="arnon.dev/file3.json"

function downloading(url){
    console.log(`กำลังโหลดไฟล์จาก ${url}`)
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(connect){
                resolve(`โหลด ไฟล์ ${url} เสร็จแล้ว`)
            }else{
                reject(`ไม่สามารถโหลดไฟล ์ ${url} ได้`)
            }
        },3000)
    })
}

    downloading(url1). then(function(result){
        console.log(result)
        return downloading(url2)
    }).then(function(result){
        console.log(result)
        return downloading(url3)
    }).then(function(result){
        console.log(result)
    })


    // downloading(url1).then(function(result){
    //     console.log(result)
    //     downloading(url2).then(function(result){  ///promise HELL
    //         console.log(result)
    //         downloading(url3).then(function(result){
    //             console.log(result)
    //         })
    //     })
    // })



// downloading(url1).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("จบการทำงานแล้ว")
// })