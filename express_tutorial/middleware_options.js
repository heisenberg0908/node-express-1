const express=require('express')
const app=express()
const morgan=require('morgan')

const logger=require('./logger')
const authorize=require('./authorize')


app.use([logger,authorize])
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.status(200).send('home page')
})
app.get('/about',(req,res)=>{
    res.status(200).send('about page')
})
app.get('/api/products',(req,res)=>{
    res.status(200).send('products page')
})
app.get('/api/items',(req,res)=>{
    res.status(200).send('items page')
})

app.listen(5000,()=>{
    console.log('app is listening to port 5000...')
})