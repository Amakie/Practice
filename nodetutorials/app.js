const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.end('welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Here is the about page')
    }
    else
    res.end(`
        <h1>oops</h1>
    <p>can't find the page</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)