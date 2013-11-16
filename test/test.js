var fs = require('fs');
var path = require("path");
var rimraf = require("rimraf");
var writer = require('../index');
var assert = require('assert');

/* mocha globals - describe, beforeEach, afterEach, it */

describe('Write something', function(){

  describe('scribe()', function(){
    beforeEach(function(done){
      var req = {
        originalUrl: '/hello-world'
      };
      writer.scribe(req, '<h1>Hello World</h1>', done);
    });
    afterEach(function(done){
      rimraf(path.join(__dirname, "../dist"), function (er) {
        if (er) throw er;
        done();
      })
    });

    it('It should write something to dist', function(done){
      fs.readFile('dist/hello-world/index.html', 'utf8', function(err,data){
        assert(data === '<h1>Hello World</h1>');
        done();
      });
    });
  });

});
