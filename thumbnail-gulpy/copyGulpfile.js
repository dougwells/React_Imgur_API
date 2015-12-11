var gulp = require('gulp');  //skeleton.  Responsible for the build
var gutil = require('gulp-util'); //console log output during build.  For debug
var source = require('vinyl-source-stream'); //passing strings from one part of build process to another
var browserify = require('browserify'); //what part of code depends on another.  "Load order"
var watchify = require('watchify'); //nodemon or grunt for gulp.  Reruns the build process when code changes/saved ($ gulp filename)
var reactify = require('reactify'); //Converting JSX -> JS

gulp.task('default', function() {         // bundler is the object that actually executes the build
  var bundler = watchify(browserify({     //Browserify's configuration settigs (to do the build)
    entries: ['./src/app.jsx'],           //starting point for browserify
    transform: [reactify],                //states module for converting JSX->JS
    extensions: ['.jsx'],                 //what file types to look for in build process
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling '+file);
    return bundler  //run bundler which is the core build object (based on browserify)
      .bundle()   //.bundle() -> go build the file we are asking for
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))  //error reporting
      .pipe(source('main.js'))  //put build process output into main.js
      .pipe(gulp.dest('./'));   //piped:  main.js should be stored in current working directory
  };
  build();  //runs the build function
  bundler.on('update', build);  //whenever we make an 'update' to files, build again (watchify at work)
});
