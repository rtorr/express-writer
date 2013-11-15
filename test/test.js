var fs = require('fs');
var path = require("path");
var rimraf = require("rimraf");
var writer = require('../index');
var assert = require('assert');


describe('Write something', function(){
  describe('Blah', function(){

    beforeEach(function(done){
      writer.scribe(req, '<h1>Hello World</h1>', done);
    });

    afterEach(function(done){
      rimraf(path.join(__dirname, "../dist"), function (er) {
        if (er) throw er;
        done();
      })
    });

    var req = {
      originalUrl: '/hello-world'
    };

    it('It should write something to dist', function(done){
      fs.readFile('dist/hello-world/index.html', 'utf8', function(err,data){
        assert(data === '<h1>Hello World</h1>');
        done();
      });
    });

  })
});

