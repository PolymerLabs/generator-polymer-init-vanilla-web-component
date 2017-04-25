'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-polymer-init-vanilla-web-component:app', function () {

  it('creates files', function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: 'x-foo'})
      .toPromise()
      .then(() => {
        assert.file([
          'demo',
          'demo/index.html',
          'test',
          'test/index.html',
          'test/x-foo.html',
          'bower.json',
          'x-foo.html',
          'package.json',
          'index.html',
          'README.md'
        ]);
      });
  });
});
