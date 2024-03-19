// every file in js is a module by default..
// modules are basically encapsulated code.which are basically resusable code..
//They allow you to split your code into separate files, making it easier to manage
// and maintain large codebases. Modules help in organizing code by breaking it into 
//smaller, more manageable pieces, and they also facilitate code reuse across different 
//parts of an application or even across multiple applications.

const names=require('./module1.js')
const sayhii=require('./module2.js')
const data=require('./module3.js')

require('./module4.js')
sayhii('susan')
sayhii.bob