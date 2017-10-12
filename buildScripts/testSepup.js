// This file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function(){};

//Para testear controladores angular ver
//https://stackoverflow.com/questions/13585964/how-to-test-controllers-created-with-angular-module-controller-in-angular-js
