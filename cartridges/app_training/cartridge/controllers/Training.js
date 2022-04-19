'use strict';
 
var server = require('server');
 
 
server.get('HelloWorld', function (req, res, next) {
 return next();
});
 
 
module.exports = server.exports();