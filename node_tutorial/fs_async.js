const {readFile,writeFile}=require('fs')
console.log('starting the process....')
readFile('./fs_files/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return 
    }
    const data1=result;
    //console.log(data1)

    readFile('./fs_files/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const data2=result;
        //console.log(data2)
        writeFile('./fs_files/aync.txt',`here the result which includes
        both the data of first file: ${data1}, and second file: ${data2}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with the writing task')
        })


    })
})

console.log('starting the next task...')

// in asunchronous method the order of the code doesn't matter,it skips the callback function
// and without any wait starts the new task but in synchronous type it is does all the task 
// in order as the code is written.
