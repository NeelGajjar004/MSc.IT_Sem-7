// Q4. Use above chatbot module in web based chatting of websocket.
const bot = require("../Q3_Chatbot/chatbot");
const WebSocket = require('ws')
const http = require('http');

var st = require('node-static');

var fileServer = new st.Server('./index.html');

var httpserver = http.createServer((req, res) => {
    req.on("end", () => {
        fileServer.serve(req, res);
    }).resume();
}).listen(8000, () => {
    console.log("Server is listening on port 8000");
})

const wss = new WebSocket.Server({ server: httpserver });

wss.on("connection", (ws) => {
    ws.send("Welcome");
    ws.on("message", (message) => {
        ws.send(bot.chatbot(message.toString()));
    })
})