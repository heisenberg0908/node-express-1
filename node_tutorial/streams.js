//read stream is a feature that is used when u are dealing with large amounts of data
//or data streams.While dealing with large files or data streams , it can be difficult,
//to read the data at once,it can be inefficient and memory intensive.
// that's why we use read stream in this , data is read in chunks or pieces.

const {createReadStream}=require('fs')

const stream=createReadStream('./fs_files/big_file.txt','utf-8')
stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
})