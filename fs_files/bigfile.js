const {writeFileSync}=require('fs')

for(let i=0;i<1000;i++){
    writeFileSync('./fs_files/big_file.txt',`hello world${i}\n`,{flag:'a'})
}