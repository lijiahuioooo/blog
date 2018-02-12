var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var facade = require('./contractFacade.js');
var ipfsFacade = require('./ipfsFacade.js');
var router = express.Router();


router.post('/', async function (req, res) {
    const value =100;
    console.log("publish 请求参数=》"+req.body.content+" from:"+facade.from);
    //数据保存到ipfs
    var ipfs_hash = await ipfsFacade.add(req.body.content);
    var blogArr = JSON.parse(await facade.getBlog(facade.to));
    console.log("blogArr=>"+blogArr);
    blogArr.push({"data":ipfs_hash,"time":new Date().getTime()});
    await facade.publish(facade.from,facade.to,JSON.stringify(blogArr),value);
    res.redirect('index');
})
module.exports = router;