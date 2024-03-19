const express=require('express')
const app=express()
const logger=require('../logger')

app.use(logger)

app.get('/',logger,(req,res)=>{
    res.status(200).send('<h1>home page</h1>')
})

app.get('/about',logger,(req,res)=>{
    res.status(200).send('<h1>about</h1>')
})

app.get('*',logger,(req,res)=>{
    res.status(404).send('<h1>not found</h1>')
})

app.listen(5000,(req,res)=>{
    console.log('app is listening to port 5000..')
})