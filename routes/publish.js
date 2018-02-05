var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var facade = require('./contractFacade.js');
var router = express.Router();


router.post('/', async function (req, res) {
    const content = req.body.content;
    const value =100;
    console.log("publish 请求参数=》"+content);
    await facade.publish(facade.from,facade.to,content,value);
    res.redirect('index');
})
module.exports = router;