'use strict';

var path  = require('path');

module.exports = function(context) {
  var nodePath = process.env.EMBER_NODE_PATH;
  var contextPath = path.resolve(context);

  if (nodePath) {
    var nodeModulesPath = path.resolve(nodePath);

    if (contextPath.indexOf(nodeModulesPath) === 0) {
      return path.resolve(contextPath,'node_modules');
    } else {
      return path.resolve(nodePath,'node_modules');
    }
  } else {
    return path.resolve(contextPath,'node_modules');
  }
};
