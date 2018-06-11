let gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

const sources = {
    html: 'src/**/*.html',
    scss: 'src/common/scss/**/*.scss',
    css: 'src/common/css/**/*.css',
    js: 'src/common/js/**/*.js'
}

const destinations = {
    css: 'src/common/css',
    js: 'src/common/js/min'
}

gulp.task('reload', () => {
    browserSync.reload();
});

gulp.task('serve', ['sass'], () => {
    browserSync({
        server: 'src'
    });
    gulp.watch(sources.html, ['reload']);
    gulp.watch(sources.scss, ['sass','reload']);
    gulp.watch(sources.css, ['minify']);
});

gulp.task('sass', () => {
    return gulp.src(sources.scss)
        .pipe(sourcemaps.init())
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destinations.css))
        .pipe(browserSync.stream());
});

gulp.task('minify', () => {
    return gulp.src(sources.css)
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(destinations.css));
});

gulp.task('uglify', () => {
    return gulp.src(sources.js)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destinations.js))
});

gulp.task('default', ['serve']);
