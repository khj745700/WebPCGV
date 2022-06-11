const express = require("express");
const session = require("express-session");
const memorystore = require("memorystore");
const app = express();
const hostname = "192.168.0.21";
const port = 3000;
const MemoryStore = memorystore(session);
const mongoose = require("mongoose");
const DB_URI = "mongodb://127.0.0.1:27017/cgv";
const {dummyDataLoader} = require("./utils/dummyDataLoader");
const movie = require("./routes/movie/MovieController");
const image = require("./routes/utils/ImageController");
const event = require("./routes/event/EventController");

const server = async () => {
    try{
        await mongoose.connect(DB_URI);
        await dummyDataLoader();
        await app.use(express.json());
        await app.use("/movies",movie);
        await app.use("/imgs", image);
        await app.use("/events",event);
        await app.listen(port, hostname, function (){
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    } catch (err){
        console.log(err);
    }
};

server();