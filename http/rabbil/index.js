const fs = require("fs");
const http = require('http');

const Server = http.createServer((req, res) => {
    if (req.url === '/') {
        let data = fs.readFileSync('home.html', 'utf-8');
        res.end(data);
    }
    else if(req.url === '/about'){
        let data = fs.readFileSync('about.html', 'utf-8');
        res.end(data);
    }
    else if(req.url === '/contact'){
        let data = fs.readFileSync('contact.html', 'utf-8');
        res.end(data);
    }
    else if(req.url === '/term'){
        let data = fs.readFileSync('terms.html', 'utf-8');
        res.end(data);
    }
    else{
        let data = fs.readFileSync('notFound.html', 'utf-8');
        res.end(data);
    }
});

Server.listen(4000, () => {
    console.log('server run success');
})