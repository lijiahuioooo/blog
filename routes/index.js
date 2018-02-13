var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var facade = require('./contractFacade.js');
var ipfsFacade = require('./ipfsFacade.js');
var router = express.Router();
var moment = require('moment');
moment().format();

router.get('/', async function (req, res) {
    //获取博客币
    const balance = await facade.balance(facade.to)

    var blogs=[]
    //从ETH获取文章hash值列表
    var ipfs_list = await facade.getBlog(facade.to);
    var blog_hashs =ipfs_list.split(":");

    for(var i=(blog_hashs.length-1);i>=0;i--){
        if(blog_hashs[i] !="") {
            const blogJson = JSON.parse(await ipfsFacade.cat(blog_hashs[i]));
            blogJson.time = moment.unix(blogJson.time).format("YYYY-MM-DD HH:mm:ss");
            blogs.push(blogJson);
        }
    }
    console.log(JSON.stringify(blogs));
    res.render('index', {blogs:blogs,balance:balance});

})
module.exports = router;