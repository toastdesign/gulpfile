var gulp = require('gulp'),
	autoprefixer = require('autoprefixer')
	uglify = require('gulp-uglify')
	sass = require('gulp-sass')
	plumber = require('gulp-plumber')
	imagemin = require('gulp-imagemin')
	postcss = require('gulp-postcss')
	csswring = require('csswring');


// Scripts task
// Uglifies,
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('build/minjs'));
});

// Images
// Compress images 
gulp.task('image', function(){
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img'));
});

// Styles
// Compress scss styles
gulp.task('styles', function(){
	var processors = [
		csswring,
		autoprefixer({browsers: ['last 3 versions']})
	];

	return gulp.src('sass/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss(processors))
		.pipe(gulp.dest(''))
});

// Watch
// Watches js files
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('sass/**/*.scss', ['styles']);
});


gulp.task('default', ['scripts', 'styles','image', 'watch']);
