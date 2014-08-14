var gulp = require( 'gulp' );
var webserver = require('gulp-webserver');

gulp.task( 'default', [ 'webserver' ] );

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