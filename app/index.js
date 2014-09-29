'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var BasicGenerator = yeoman.generators.Base.extend({
  
  initializing: function () {
    this.pkg = require('../package.json');
  },

  writing: function(){
    this.src.copy('_package.json', 'package.json');
    this.src.copy('_bower.json', 'bower.json');
    this.src.copy('gulpfile.coffee', 'gulpfile.coffee');
    this.src.copy('bowerrc', '.bowerrc');
    this.src.copy('gitignore', '.gitignore');
    this.directory('public', 'public');
    this.directory('source', 'source');
    this.directory('gulp', 'gulp');
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = BasicGenerator;