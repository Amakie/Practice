function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log('making requests to ' + `${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('Cannot communicate')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('processing request')
        resolve(`${response}`)
    })
}

//makeRequest('Facebook').then(response => {
    //console.log('request successful')
    //return processRequest(response)
//}).then((processResponse) => {
    //console.log('response processed')
//}).catch(err => {
    //console.log('unsuccessful')
//})

async function newProcess() {
    try{
        const response = await makeRequest('Google')
            console.log('request successful')
        const processResponse = await processRequest(response)
            console.log('response processed')
    } catch (err){
        console.log(err)
    }
}
newProcess()
 