const express = require("express");
const fs = require('fs');
const cors = require("cors");
const router = express.Router();

router.get("/:imgId",cors(), (req, res) => {
    fs.readFile('./public/images/' + req.params.imgId, (error, data) => {
        if (error) {
            throw error;
        }
        res.write(data);
        res.end();

    })
});

module.exports = router;