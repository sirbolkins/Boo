'use strict';
var ghost = require('ghost');
var path = require('path');

ghost({
  config: path.join(__dirname, 'boo.config.js')
});

ghost().then(function (ghostServer) {
    ghostServer.start();
});