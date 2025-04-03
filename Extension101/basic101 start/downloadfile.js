//โปรแกรมดาวน์โหลดไฟล์

const url1="arnon.dev/file1.json"
const url2="arnon.dev/file2.json"
const url3="arnon.dev/file3.json"

function downloading(url,callback){
    console.log(`กำลังดาวโหลดไฟล์จาก ${url}`)
    setTimeout(()=>{
        callback(url)
    },1000)
}

downloading(url1,function(result){
    console.log(`ดาวโหลด ${result} เสร็จแล้ว`)
    downloading(url2,function(result){
        console.log(`ดาวโหลด ${result} เสร็จแล้ว`)
        downloading(url3,function(result){
            console.log(`ดาวโหลด ${result} เสร็จแล้ว`)
        })
    })
})