var express = require ('express');
var newRouter = require('../routers/newRouter');

var app = express();

app.use('/', newRouter);

app.listen(1337, function () {
  console.log('wtf listening on port 1337');
};
