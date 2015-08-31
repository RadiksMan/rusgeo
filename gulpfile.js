var gulp = require('gulp'),
    sass = require('gulp-sass'),//npm install gulp-sass --save-dev
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),//npm install --save-dev gulp-autoprefixer
    browserSync = require('browser-sync').create();//npm install browser-sync gulp --save-dev

var input = './sass/**/*.scss';
var output = './mincss';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'nested'
};

function errorLog(error){
    console.error.bind(error);
    this.emit('end');
}


gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "rusgeo/"
    });
});

gulp.task('scripts',function(){
    gulp.src('js/*.js')//выбираю все скрипты в этой папке
    .on('error',errorLog)
    .pipe(uglify())//применяю функ. uglify();
    .pipe(gulp.dest('minjs'));//создаю папку minjs и помищяю туда все минифицированные скрипты.

    // Вызов - 'gulp scripts'
});

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // .pipe(sass().on('error', sass.logError))
    // Run Sass on those files
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});


//Смотрю за изменением JS
gulp.task('watch',function(){
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch("*.php").on('change', browserSync.reload);
});


gulp.task('default', ['scripts','sass','watch','browser-sync']);