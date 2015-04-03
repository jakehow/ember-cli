'use strict';

var path  = require('path');

module.exports = function(contextPath) {
  var nodePath = process.env.EMBER_NODE_PATH;

  if(nodePath) {
    if(contextPath.indexOf(nodePath) === 0) {
      return path.resolve(nodePath,contextPath,'node_modules');
    }
    else {
      return path.resolve(nodePath,'node_modules');
    }
  }
  else {
    return path.resolve(contextPath,'node_modules');
  }
};
