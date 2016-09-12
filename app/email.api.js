var sendmail = require('sendmail');
var express  = require('express');
var router   = express.Router();

module.exports = function(app) {

    app.get('/sendemail', function(req, res) {
        //res.json('success': 'true');
    });
}
