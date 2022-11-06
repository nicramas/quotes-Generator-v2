const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync").create();
 
function compileSass(done) {
    gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init()) //We turn on the map at the beginning of all operations 
        .pipe(sass({outputStyle: "expanded"}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write()) // And save just before saving the resulting files 
        .pipe(gulp.dest('./css'));
    done();
}

function watcher(done) {
    browserSync.init({
        server: "./"
    });
    gulp.watch('./scss/**/*.scss', gulp.series(compileSass));
    gulp.watch("./*.html", gulp.series(reload));
}

function reload(done) {
    browserSync.reload();
    done();
}
 
exports.default = gulp.parallel(compileSass);
exports.default = gulp.parallel(compileSass, watcher);