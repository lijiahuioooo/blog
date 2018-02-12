var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var index = require('./routes/index');
var publish = require('./routes/publish');
var ipfsAdd = require('./routes/ipfsAdd.js');
var ipfsCat = require('./routes/ipfsCat.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', index);
app.use('/publish', publish);
app.use('/ipfs_add', ipfsAdd);
app.use('/ipfs_cat', ipfsCat);


module.exports = app;


// var server = app.listen(8081,'localhost',function () {
//
//     var host = server.address().address
//     var port = server.address().port
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
//
// })