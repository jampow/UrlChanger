var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get( '/primeira-url-fake.html', function( req, res ){ res.redirect( '/index.html' ); });
app.get( '/segunda-url-fake.html' , function( req, res ){ res.redirect( '/index.html' ); });
app.get( '/terceira-url-fake.html', function( req, res ){ res.redirect( '/index.html' ); });

app.listen(process.env.PORT || 3000);
