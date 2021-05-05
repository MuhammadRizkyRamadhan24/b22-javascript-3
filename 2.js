const getMonth = (callback) =>{
    setTimeout(()=>{
        let error = false
        let month = ['January','February','March','April','May','June','July','August','September','October','November','Desember'];
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

function cb(message, data){
    return new Promise((resolve,reject)=>{
        if(message == null){
            resolve(message, data)
        }else{
            reject(eror, data)
            console.log(message,data);
        }
    })
}

function cb(error, data){
    try{
        data.map((item) =>{
            return console.log(item);
        })
    }catch{
        console.log(error.message);
    }
}

getMonth(cb)