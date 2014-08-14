var gulp = require( 'gulp' );
var webserver = require( 'gulp-webserver' );
var concat = require( 'gulp-concat' );
var sourcemaps = require( 'gulp-sourcemaps' );
var uglify = require( 'gulp-uglify' );

gulp.task( 'default', [ 'scripts', 'webserver' ] );

gulp.task( 'scripts', function(){
	return gulp.src( [ './lib/urlChanger.js' ] )
		.pipe( sourcemaps.init() )
			.pipe( uglify() )
			.pipe( concat( 'urlChanger.min.js' ) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( 'lib' ) )
		.pipe( gulp.dest( 'app/js' ) );
});

gulp.task( 'webserver', function(){
	gulp.src( 'app' )
		.pipe( webserver({
			livereload: true,
			directoryListing: true,
			open: true,
			port: 3000,
			fallback: 'index.html'
		}));
});