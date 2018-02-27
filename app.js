var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var multer  = require('multer');
app.use(multer({ dest: '/tmp/'}).array('image'));
var index = require('./routes/index');
var publish = require('./routes/publish');
var upload = require('./routes/upload');
var to_upload = require('./routes/to_upload');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/index', index);
app.use('/publish', publish);
app.use('/upload', upload);
app.use('/to_upload', to_upload);


module.exports = app;


// var server = app.listen(8081,'localhost',function () {
//
//     var host = server.address().address
//     var port = server.address().port
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
//
// })