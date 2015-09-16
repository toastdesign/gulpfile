var gulp = require('gulp'),
	uglify = require('gulp-uglify')
	sass = require('gulp-sass')
	plumber = require('gulp-plumber')
	imagemin = require('gulp-imagemin')
	csswring = require('csswring');


// Uglifies scripts,
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('build/minjs'));
});

// Images
gulp.task('image', function(){
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img'));
});

// Styles
// Compress scss styles
gulp.task('styles', function(){
	gulp.src('sass/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest(''))
});

// Watch file changes
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('sass/**/*.scss', ['styles']);
});


gulp.task('default', ['scripts', 'styles','image', 'watch']);
