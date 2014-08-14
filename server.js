var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get( '/first-url.html', function( req, res ){ res.redirect( '/index.html' ); });
app.get( '/second-url.html' , function( req, res ){ res.redirect( '/index.html' ); });
app.get( '/third-url.html', function( req, res ){ res.redirect( '/index.html' ); });

app.listen(process.env.PORT || 3000);
