const http=require('http')
const fs=require('fs')

http.createServer((req,res)=>{
    const data=fs.readFileSync('./fs_files/big_file.txt')
    res.end(data)
}).listen(5000)


