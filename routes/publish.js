var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var facade = require('./contractFacade.js');
var ipfsFacade = require('./ipfsFacade.js');
var router = express.Router();


router.post('/', async function (req, res) {;

    console.log("publish 请求参数=》"+req.body.content+" from:"+facade.from);
    var current_time= new Date().getTime()
    const dataJson = {"data":req.body.content, "time":Math.floor(current_time/1000)};
    //数据保存到ipfs
    const hash = await ipfsFacade.add(dataJson);
    //从ETH获取文章hash值列表
    var ipfs_list = await facade.getBlog(facade.to);
    
    await facade.publish(facade.from,facade.to,ipfs_list+":"+hash,100);
    res.redirect('index');
})
module.exports = router;