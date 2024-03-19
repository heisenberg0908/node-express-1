// the file system module provides both synchronous and asynchronous ways to interact with the
// file system.By the help of file system we can read file, write file,create file and delete
// file also.Asynchronous way blocks the code until that operation is done on the other hand 
// synchronous method does not block the code , instead they use callback functions to handle 
// errors or results.

const {readFileSync,writeFileSync}=require('fs')

console.log('startinf the first task....')

const first=readFileSync('./fs_files/first.txt','utf-8')
console.log(first)

const second=readFileSync('./fs_files/second.txt','utf-8')
console.log(second)
// it is used to write the data in the given file,it replaces the data in that file
// if flag a is not used
const write1=writeFileSync('./fs_files/first.txt','hello this is to test the write file sync','utf-8')
console.log(write1)


console.log('done with the writing task')
// flag a is used to append the provided data.
const write2=writeFileSync('./fs_files/first.txt','this is the appended line..',{flag:'a'})
console.log(write2)

//this method can also be used to create a new file
const newfile=writeFileSync('./fs_files/third.txt','utf-8')
console.log(newfile)

console.log('all task finished....')

