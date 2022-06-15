const express = require('express');
const router = express.Router();
const {ScreenTable} = require('../../dao/screenTable')
const cors = require("cors");

router.get("",cors(), async (req, res) =>{
    const ScreenTableData = await ScreenTable.find({}).populate('movie_id').populate('screen_id').lean();
    await res.send(JSON.stringify(ScreenTableData));
});


module.exports = router;
