const  express = require("express");
const router = express.Router();
const { Event } = require("../../dao/event");
const cors = require("cors");


router.get("",cors(), async (req,res)=> {
    let eventlist = await Event.find({}).lean();
    res.send(JSON.stringify(eventlist));
})


module.exports = router;