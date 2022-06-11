const  express = require("express");
const router = express.Router();
const { Event } = require("../../dao/event");


router.get("", async (req,res)=> {
    let eventlist = await Event.find({});
    res.send(eventlist);
})


module.exports = router;