var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var facade = require('./contractFacade.js');
var router = express.Router();

router.get('/', async function (req, res) {
    const total = await facade.blogTotal();
    var blogs=[];
    for(var i=(total-1);i>=0;i--){
        blogs.push(await facade.getBlog(i));
    }
    const balance = await facade.balance(facade.to)
    res.render('index', {contentArr:blogs,balance:balance})
})
module.exports = router;