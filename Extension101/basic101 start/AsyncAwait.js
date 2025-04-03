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
        },1000)
    })
}

    //Async & Await
    async function start(){
        console.log(await downloading(url1))
        console.log(await downloading(url2))
        console.log(await downloading(url3))
    }

    start()

    