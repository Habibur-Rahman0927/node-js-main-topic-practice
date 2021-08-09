const fs = require('fs');
// Create a file

console.log(fs);
fs.writeFile('example.txt', 'this is an example', (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('File successfully created');
        //file read

        fs.readFile('example.txt', 'utf8',(err, file) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log(file);
            }
        })
    }
});

// file rename
fs.rename('rename.txt', 'example2.txt',(err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully rename this file");
    }
});

// append data 
fs.appendFile('example.txt', ' some data being appended', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('successfully append data to file')
    }
});

// delete file

fs.unlink('deletefile.js', (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('successfully append data to file');
    }
});

// Created folder

fs.mkdir('folder', err =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('successfully folder Created');
        // file create
        fs.writeFile('./folder/test.txt', 'under folder make file and write somethings', (err)=>{
            if (err) {
                console.log(err);
            }
            else{
                console.log('successfully create file under folder');
                // data append
                fs.appendFile('folder/test.txt', ' hello', err =>{
                    if (err) {
                        console.log(err);
                    }
                    else{
                        console.log("data append")
                    }
                })
            }
        })
    }
})

// delete file under folder
fs.unlink('./delete/delete.txt', err =>{
    if(err){
        console.log(err)
    }
    else{
        console.log('successfully delete file under folder')
    }
});

// delete folder

fs.rmdir('delete', err =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('successfully delete folder');
    }
});


// fs.readdir('hello', (err, files) =>{
//     if(err){
//         console.log(err);
//     }else{
//         for(let file of files){
//             fs.unlink('./example.txt' + file, (err) =>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log('success')
//                 }
//             })
//         }
//     }
// })

// fs and path mixing
const path = require('path');

// Create folder

fs.mkdir(path.join(__dirname, '/javascript'),{}, err =>{
    if(err){
        console.log(err)
    }
    else{
        console.log('Folder created');
    }
})

// crated and write file 

fs.writeFile(path.join(__dirname, '/javascript', 'hello.txt'), 'Hello writer',(err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Folder and file created');
        //append data 
        fs.appendFile(path.join(__dirname, '/javascript', 'hello.txt'), ' I love javascript',err =>{
            if(err){
                console.log(err);
            }
            else{
                console.log('append data')
            }
        })
    }
});


// // Read File
// fs.readFile(path.join(__dirname, '/javascript', 'hello.txt'),'utf8', (err, data) =>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log(data)
//     }
// })

// Rename file
fs.rename(path.join(__dirname, '/javascript', 'hello.txt'), path.join(__dirname, '/javascript', 'hello-world.txt'), (err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file rename')
    }
})