const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

cekHariKerja('selasa')
.then((resolveValue)=>{
    console.log(resolveValue);
}).catch((err) => {
    console.log(err)
});

const asyncFunc = async(Hari) => {
    try {
        const getData = await cekHariKerja(Hari)
        console.log(getData);
    } catch (error) {
        console.log(error);
        console.log('error');
    }
}

asyncFunc('minggu')