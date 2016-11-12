//This file isn't transpiled, so must use commonJS and es5

//Register Babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that mocha does not understand
require.extensions['.css'] = function() {};
