var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var facade = require('./ipfsFacade');
var router = express.Router();


router.post('/', async function (req, res) {
    const value =100;
    console.log("publish 请求参数=》"+req.body.content);
    let User = {
        "name":"naruto",
        "age":23,
        "level":"ss"
    };
    const hash = await facade.add(User);
    console.log("ipfs-hash=>"+hash);
    console.log("http://localhost:8080/ipfs/"+hash);
    res.redirect('index');
})
module.exports = router;