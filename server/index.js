//npm i express cors nodemon socket.io
const express = require('express'); 
const app = express();

const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://localhost:3000",
        methods: ["GET", "POST"],
    }
})



app.get('/', (req, res) => {
    res.send("this thing is working");
})

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})