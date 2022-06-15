const express = require('express');
const router = express.Router();
const { User } = require('../../dao/user');
const cors = require('cors');


router.post('/login', cors(), async(req,res) => {
    const id = req.query.id;
    const pwd = req.query.pwd;
    await User.findOne({login_id: id}).exec()
        .then(data => {
            console.log(data);
            if (data == null) {
                res.send("아이디가 맞지않음");
            }

            if (data.password == pwd) {
                res.send("ok");
            } else {
                res.send("비밀번호가 맞지않음");
            }
        });
});

router.post('/sign', cors(), async (req,res)=>{
    const id = req.query.id;
    const name = req.query.name;
    const pwd = req.query.pwd;
    console.log(id,name,pwd);
    await User.findOne({login_id: id}).exec()
        .then(data => {
            if(data == null){
                const newUser = new User({
                    login_id :id,
                    name : name,
                    password : pwd
                });
                newUser.save();
                res.send(newUser);

            }else{
                res.send("아이디 있음.");
            }
        });
})

module.exports = router;
