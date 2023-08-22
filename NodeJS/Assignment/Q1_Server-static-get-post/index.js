// Q1. Develop a web server with following functionalities:
// - Serve static resources.
// - Handle GET request.
// - Handle POST request.

const http = require("http");
const url = require("url");
const static = require("node-static");

const fileServer = new static.Server('./index.html')

const server = http.createServer((req,res) => {
    // console.log(req.method + " : " + req.url)
    const u1 = url.parse(req.url,true);
    
    if(u1.pathname == "/post_process" && req.method === "POST")
    {
        let body = '';
        req.on('data',chunk => {
            body += chunk.toString();
        });
        req.on('end',() => {
            // res.end(''+body.toString().split('&'));
            res.end(body);
        })
    }
    else if(u1.pathname == "/get_process" && req.method === "GET")
    {
        res.write("\nName :- " + u1.query.name +"\n Age :- "+ u1.query.age);
        res.end()
    }
    
    req.on('end' , () => {
        fileServer.serve(req,res);
    }).resume();

});

server.listen(8000,()=>{
    console.log("Server Listening Port on 8000...")
})