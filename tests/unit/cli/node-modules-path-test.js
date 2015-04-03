'use strict';
/*jshint expr: true*/

var expect  = require('chai').expect;
var path    = require('path');
var nodeModulesPath = require('../../../lib/cli/node-modules-path');

describe('cli/node-module-path.js', function() {

  afterEach(function() {
    delete process.env.EMBER_NODE_PATH;
  });


  it('nodeModulesPath() should return the local node_modules path by default.', function() {
    // Valid commands
    var expectedPath = path.join(process.cwd(),'node_modules');

    expect(
      nodeModulesPath(process.cwd())
    ).to.equal(expectedPath);
  });

  it('nodeModulesPath() should return subdirectories of EMBER_NODE_PATH when set.', function() {
    process.env.EMBER_NODE_PATH = '/tmp';
    expect(nodeModulesPath(process.cwd())).to.equal('/tmp/node_modules');
    expect(nodeModulesPath('/tmp/node_modules/my-add-on')).to.equal('/tmp/node_modules/my-add-on/node_modules');
  });
});
