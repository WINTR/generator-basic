#########################################################
# Basic Gulp Config
# Author: matt@wintr.us and team @ WINTR
#########################################################

#--------------------------------------------------------
# Requirements
#--------------------------------------------------------

gulp           = require 'gulp'
requireDir     = require 'require-dir'
runSequence    = require 'run-sequence'

# Require individual tasks
requireDir './gulp/tasks', { recurse: true }
    
#---------------------------------------------------------

gulp.task "default", ["dev"]

gulp.task "dev", ->
  runSequence "clean", [
    "copy-images"
    "bower"
    "javascripts"
    "stylesheets"
  ], "server", "watch"
