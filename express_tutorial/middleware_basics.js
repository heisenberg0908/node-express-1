// middleware in nodejs refers to that function that have access to req,res and next 
// middleware objects.Middleware functions can execute code,modify request and response 
//and can also call next moiddleware functions
//middleware is basically used for tasks such as logging,authorization,error handling and
// parsing request bodies and both.

const express=require('express')
const app=express()

const logger= (req,res,next)=>{
    const method=req.method
    const url=req.url
    const time=new Date().getFullYear()
    console.log(method,url,time)
    next()
}
app.get('/',logger,(req,res)=>{
    res.send('home page')
})
app.get('/about',logger,(req,res)=>{
    res.send('about page')
})
app.get('*',(req,res)=>{
    res.status(200).send('not found')
})
app.listen(5000,(req,res)=>{
    console.log('server is listening 5000....')
})

