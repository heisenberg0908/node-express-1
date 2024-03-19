const express=require('express')
const app=express()
app.use(express.static('./methods-public-app'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/people',people)
const {people}=require('../data')
app.post('/login',(req,res)=>{
    const {name}=req.body;
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }

    res.status(401).send('plz provide valid credebtials..')
})


app.listen(5000,()=>{
    console.log('app is listening to port 5000...')
})