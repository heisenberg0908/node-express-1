// here we are using a middleware named express.static which is mainly used to serve
//static files such as css ,html, images etc.
const express=require('express')
const app=express()


// here we don't have to specify each files separately....
app.use(express.static('./express_tutorial/nav-bar_app'))

app.all('*',(req,res)=>{
    res.status(404).send('not found')
})

app.listen(5000,()=>{
    console.log('app listening on port 5000....')
})