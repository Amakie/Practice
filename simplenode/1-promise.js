const recordone = new Promise((resolve, reject) => {
    resolve('video one recorded')
})

const recordtwo = new Promise((resolve, reject) => {
    resolve('video two recorded')
})

const recordthree = new Promise((resolve, reject) => {
    resolve('video three recorded')
})

Promise.all([
    recordone, recordtwo, recordthree
]).then((messages) => {
    console.log('videos recorded, ' + messages)
}).catch((messages) => {
    console.log('videos failed ' + messages)
})
