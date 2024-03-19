const http=require('http')
const {readFileSync}=require('fs')

const homestyle=readFileSync('./nav-bar_app/styles.css')
const homelogic=readFileSync('./nav-bar_app/browser-app.js')
const homepage=readFileSync('./nav-bar_app/index.html')
const homelogo=readFileSync('./nav-bar_app/logo.svg')

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>about page<h1>')
        res.end()
    }
    else if(req.url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homestyle)
        res.end()
    }
    else if(req.url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homelogo)
        res.end()
    }
    else if(req.url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homelogic)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>not found</h1>')
        res.end()
    }

})

server.listen(5000,()=>{
    console.log('app is listening to port 5000....')
})