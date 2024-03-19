// express is a nodejs framework which is used to build web apps and apis.
//it provides set of features to easily handle http requests and responses,define
//routes ,set up middleware and much more.
// some basic methods in express are : get,pull,listen,all,post,delete,put...

const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    console.log('the app has started')
    res.status(200).send('home page')
})
app.get('/about',(req,res)=>{
    res.status(200).send('about page')
})
app.get('*',(req,res)=>{
    res.status(404).send('not found')
})

app.listen(5000,()=>{
    console.log('the app is listening to port 5000...')
})