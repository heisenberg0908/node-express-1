const express=require('express')
const app=express()
const {products}=require('./data')

app.get('/',(req,res)=>{
    res.send(products)
})
app.listen(5000,()=>{
    console.log('app is listening to port 5000...')
})