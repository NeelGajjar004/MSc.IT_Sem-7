// Q2. Develop nodejs application with following requirements:
// - Develop a route "/gethello" with GET method. It displays "Hello NodeJS!!" as response.
// - Make an HTML page and display.
// - Call "/gethello" route from HTML page using AJAX call. (Any frontend AJAX call API can be
// used.)
const static = require("node-static");
const http = require("http");
const url = require("url");

const fileServer = new static.Server("./index.html");

const server = http.createServer((req,res) => {
    const u1 = url.parse(req.url,true);
    if(u1.pathname == "/gethello" && req.method === "GET")
    {
        res.end("Hello NodeJS!!");
    }

    req.on('end',() => {
        fileServer.serve(req,res);
    }).resume();
})

server.listen(8000,()=>{
    console.log("Server Listening Port on 8000...")
})