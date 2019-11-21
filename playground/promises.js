const doWorkPromise = new Promise((resolve,reject)=>{
       reject('This is my error')
       resolve([123])
})

doWorkPromise.then((result)=>{
    console.log('Success',result)
}).catch((error)=>{
    console.log('Error',error)
})