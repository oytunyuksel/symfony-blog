var gulp = require('gulp'),
    less = require('gulp-less'),
    cleancss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin');

gulp.task('styles', function() {
    gulp.src('./app/Resources/assets/less/**/*.less')
        .pipe(less())
        .pipe(autoprefixer('last 2 versions', 'ie 8', 'ie 9'))
        .pipe(cleancss({compatibility: 'ie11'}))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./web/css/'))
});

gulp.task('images', function(){
    gulp.src('./app/Resources/assets/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('./web/img/'));
});

gulp.task('scripts', function(){
    gulp.src('./app/Resources/assets/js/**/*')
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./web/js/'));
});

gulp.task('bootstrap:scripts', function(){
    gulp.src('./node_modules/bootstrap/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('bootstrap.min.js'))
        .pipe(gulp.dest('./web/js/'));
});

gulp.task('bootstrap:styles', function() {
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('./web/css/'))
});

gulp.task('bootstrap:fonts', function() {
    gulp.src('./node_modules/bootstrap/fonts/**/*')
        .pipe(gulp.dest('./web/fonts/'))
});

gulp.task('jquery:scripts', function() {
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./web/js/'))
});

gulp.task('bootstrap',['bootstrap:scripts','bootstrap:styles','bootstrap:fonts']);
gulp.task('jquery',['jquery:scripts']);

gulp.task('default',['bootstrap','jquery','styles','images','scripts'],function() {
    gulp.watch('./app/Resources/assets/less/*.less',['styles']);
    gulp.watch('./app/Resources/assets/js/*.js',['scripts']);
    gulp.watch('./app/Resources/assets/img/**/*',['images']);
});