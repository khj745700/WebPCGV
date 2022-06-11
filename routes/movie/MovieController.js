const  express = require("express");
const router = express.Router();
const { Movie } = require("../../dao/movie");


router.get("", async (req, res) => {
   let movieList = await Movie.find({});
   await res.send(movieList);
});

router.get("/sort/reservation_percent", async (req, res) => {
   let movieList = await Movie.find({},{},{sort: {reservation_percent:-1}});
   await res.send(movieList);
});

router.get("/sort/total_score", async (req, res) => {
   let movieList = await Movie.find({},{},{sort : {total_score:-1}});
   await res.send(movieList);
});


module.exports = router;