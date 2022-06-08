const express = require("express");
const session = require("express-session");
const memorystore = require("memorystore");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;
const MemoryStore = memorystore(session);


app.get("/", function (req, res){
   return res.send("hello worlds");
});


app.listen(port, hostname, function (){
    console.log(`Server running at http://${hostname}:${port}/`);
});