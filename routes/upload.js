var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var ipfsFacade = require('./ipfsFacade.js');
var router = express.Router();


router.post('/', async function (req, res) {;

    console.log(req.files);  // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, async function (err, data) {
        const hash = await ipfsFacade.upload(data);
        res.end(hash);
    });
})
module.exports = router;