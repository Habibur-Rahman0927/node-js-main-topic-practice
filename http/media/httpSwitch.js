const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000;


const server = http.createServer((req, res) =>{
    // build a file path 
    let filePath = path.join(__dirname, 'public', req.url === '/'? 'index.html': req.url);
    
    // extension of file
    let extname = path.extname(filePath);
    
    // Initail content type
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    fs.readFile(filePath, (err, content) =>{
        if(err){
            if(err.code == 'ENDENT'){
                // page not found
                fs.readFile(path.join(__dirname,'public', '404.html'), (err, content) =>{
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8')
                })
            }
            else{
                //some server error
                res.writeHead(500);
                res.end(`server error : ${err.code}`);
            }

        }
        else{
            // success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    })

    // let data = fs.readFileSync(filePath, 'utf-8');
    // res.end(data);
});

server.listen(5000, () =>{
    console.log(`server runing on port ${PORT}`);
})
