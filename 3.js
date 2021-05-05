const bilGanjil = (num) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataNum = [1,3,5,7,9]
            let cek = dataNum.find((item)=>{
                return item === num
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Bukan bilangan Ganjil'))
            }
        },3000)
    })
}

bilGanjil(5)
.then((resolveValue)=>{
    console.log(resolveValue);
}).catch((err) => {
    console.log(err)
});

const asyncGanjil = async(Angka) => {
    try {
        const getData = await bilGanjil(Angka)
        console.log(getData);
    } catch (error) {
        console.log(error);
        console.log('error');
    }
}

asyncGanjil(1)

const bilGenap = (num) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataNum = [2,4,6,8,10]
            let cek = dataNum.find((item)=>{
                return item === num
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Bukan bilangan Genap'))
            }
        },3000)
    })
}

bilGenap(5)
.then((resolveValue)=>{
    console.log(resolveValue);
}).catch((err) => {
    console.log(err)
});

const asyncGenap = async(Angka) => {
    try {
        const getData = await bilGenap(Angka)
        console.log(getData);
    } catch (error) {
        console.log(error.message);
        console.log('error');
    }
}

asyncGenap(1)