var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var facade = require('./ipfsFacade');
var router = express.Router();


router.get('/', async function (req, res) {

    const data = await facade.cat(req.query.hash);
    console.log("ipfs-data=>"+data);
    res.redirect('index');
})
module.exports = router;