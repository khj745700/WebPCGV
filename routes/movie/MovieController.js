const  express = require("express");
const router = express.Router();
const { Movie } = require("../../dao/movie");
const cors = require('cors');

router.get("", cors(), async (req, res) => {
   let movieList = await Movie.find({}).lean();
   await res.status(200);
   await res.send(JSON.stringify(movieList));
});

router.get("/sort/reservation_percent",cors(), async (req, res) => {
   let movieList = await Movie.find({},{},{sort: {reservation_percent:-1}}).lean();
   await res.send(JSON.stringify(movieList));
});

router.get("/sort/total_score",cors(), async (req, res) => {
   let movieList = await Movie.find({},{},{sort : {total_score:-1}}).lean();

   await res.send(JSON.stringify(movieList));
});


module.exports = router;