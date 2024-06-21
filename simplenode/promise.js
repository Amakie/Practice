let p = new Promise((resolve, reject) => {
    let a = 1 + 5
    if (a == 2) {
        resolve('success')
    } else {
        reject('failed')
    }
})

p.then ((message) => {
    console.log('this is the then message ' + message)})
    .catch ((message) => {
        console.log('this is the error message ' + message)
    })