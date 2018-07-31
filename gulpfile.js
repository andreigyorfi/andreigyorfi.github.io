//
// Dependencies
//

var autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    del = require('del'),
    gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    images = require('gulp-imagemin'),
    flatten = require('gulp-flatten'),
    replace = require('gulp-replace'),
    header = require ('gulp-header'),
    browserSync = require('browser-sync').create();





//
// Paths
//

var styleSrc = 'source/sass/**/*.sass',
    styleDest = 'build/assets/css/',
    htmlSrc = 'source/',
    htmlDest = 'build/',
    vendorSrc = 'source/js/vendors/',
    vendorDest = 'build/assets/js/',
    scriptSrc = 'source/js/*.js',
    scriptDest = 'build/assets/js/';





//
// Stand-alone tasks
//

// Compile all Sass files

gulp.task('sass', function() {
    gulp.src('source/sass/**/*.sass')
      .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
          }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('build/assets/css'));
});





// Uglify our own JS files

gulp.task('scripts', function() {
    gulp.src('source/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'));
});





// Concat and uglify vendor JS files

gulp.task('vendors', function() {
    gulp.src(
            [
                'source/js/vendors/jquery.min.js',
                'source/js/vendors/*.js'
            ])
        .pipe(plumber())
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'));
});





// Watch for changes

gulp.task('watch', function(){

    // Serve files from the root of this project

    browserSync.init({
        server: {
            baseDir: "./build"
        },
        notify: false
    });

    gulp.watch(styleSrc,['sass']);
    gulp.watch(scriptSrc,['scripts']);
    gulp.watch(vendorSrc,['vendors']);
    gulp.watch(['build/*.html', 'build/assets/css/*.css', 'build/assets/js/*.js', 'build/assets/js/vendors/*.js']).on('change', browserSync.reload);

});





// Optimize images

gulp.task('images', function() {
    gulp.src('source/img/*')
        .pipe(images())
        .pipe(gulp.dest('build/assets/img'));
});





// Copy font files

gulp.task('font-files', function() {
  gulp.src('source/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(flatten())
    .pipe(gulp.dest('build/assets/fonts'));
});

// Take all the font css stylesheets and concat them into a single SCSS file

gulp.task('font-css', function() {
  gulp.src('source/fonts/**/*.css')
    .pipe(concat('_fonts.scss'))
    .pipe(header('/* !!! WARNING !!! \nThis file is auto-generated. \nDo not edit it or else you will lose changes next time you compile! */\n\n'))
    .pipe(replace("url(\"", "url(\"../fonts/"))
    .pipe(gulp.dest('source/sass/3-elements'));
});

// Take care of font files and font css in one swoop

gulp.task('fonts', ['font-files', 'font-css'], function () {});





// Use default task to launch Browsersync and watch JS files

gulp.task('default', ['sass', 'scripts', 'vendors', 'watch'], function () {});
