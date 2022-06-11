const express = require("express");
const fs = require('fs');
const router = express.Router();

router.get("/:imgId", (req, res) => {
    try{
        fs.readFile('./public/images/'+req.params.imgId, (error, data) =>{
            res.write(data);
            res.end();
        })
    }catch (e){
        console.log(e);
        res.send("Error file");
    }
});

module.exports = router;