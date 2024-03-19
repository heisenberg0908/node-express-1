// the path module in nodejs provides utilities for working with files and directory paths.
//it helps in handling the file system paths in a cross platform system.
const path=require('path')
console.log(path.sep)
// path.join is used to concatenate various path segments into a single path.
const filepath=path.join('/content','/subfolder','/first.txt')
console.log(filepath)
// it is used to tell the base path name
const base=path.basename(filepath)
console.log(base)
// it is used to find the absolute path
const absolute=path.resolve(__dirname,'content','subfolder','first.txt')
console.log(absolute)