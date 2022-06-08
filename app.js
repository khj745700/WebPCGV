const express = require("express");
const session = require("express-session");
const memorystore = require("memorystore");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;
const MemoryStore = memorystore(session);
const mongoose = require("mongoose");
const DB_URI = "mongodb://127.0.0.1:27017/cgv";



const server = async () => {
    try{
        await mongoose.connect(DB_URI);
        app.use(express.json());
        app.listen(port, hostname, function (){
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    } catch (err){
        console.log(err);
    }
};

server();