// import required modules
var express        = require('express');
var helmet         = require('helmet');
var mongoose       = require('mongoose');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration
var app  = express();
var db   = require('./config/db.conf');
var port = process.env.PORT || 80;

// set up helmet for security
app.use(helmet());

// set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

// set up method-override
app.use(methodOverride('X-HTTP-Method-Override'));

// set static files for front-end
app.use(express.static(__dirname + '/public'));

// set up server routes
require('./app/routes')(app);

// set up api routes
app.use('/api', require('./app/email.api'));

// start the server on port
app.listen(port);
console.log('Server running on port ' + port);

module.exports = app;
