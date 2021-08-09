const http = require('http');
const Server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/'){
        res.end("Rock");
    }
    if(req.url === "/hello"){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end("<h1>Habib</h1>");
    }
    if(req.url === "/api/data"){
        const users = [
            {
                id: 1,
                name: "habib"
            }
        ];

        res.writeHead(200, {'Content-Type' : 'text/json'});
        res.end(JSON.stringify(users));
    }
    else{
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('not')
    }
    
});

Server.listen(3000, () => {
    console.log("listen to port 3000")
})