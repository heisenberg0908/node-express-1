const http=require('http')
const fs=require('fs')
http.createServer(function(req,res){
    const filestream=fs.createReadStream('./fs_files/big_file.txt','utf-8')
    filestream.on('open',()=>{
        filestream.pipe(res)
    })
    filestream.on('error',(err)=>{
        res.end(err)
    })
}).listen(5000)
