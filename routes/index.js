var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var facade = require('./contractFacade.js');
var router = express.Router();
var moment = require('moment');
moment().format();

router.get('/', async function (req, res) {
    const total = await facade.blogTotal();
    var blogs=[];
    for(var i=(total-1);i>=0;i--){
        var blog = await facade.getBlog(i);
        blog.createTime =moment.unix(blog.createTime).format("YYYY-MM-DD HH:mm");
        blogs.push(blog);
    }

    const balance = await facade.balance(facade.to)
    res.render('index', {blogs:blogs,balance:balance})
})
module.exports = router;