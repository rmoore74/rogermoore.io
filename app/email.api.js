var nodemailer = require('nodemailer');
var express    = require('express');
var router     = express.Router();

var config     = require('../config/mail.conf');

router.post('/sendemail', function(req, res) {

    // TODO: to take request body and use user params

    var transporter = nodemailer.createTransport('smtps://' + config.user + ':' + config.pass + '@smtp.gmail.com');

    var mailOptions = {
        from: 'test@test.com',
        to: 'me@rogermoore.io',
        subject: 'test email',
        text: 'test test test test'
    }

    transporter.sendMail(mailOptions, function(err, response) {
        if (err) {
            console.log(err);
            res.json({'success':'true'});
        } else {
            console.log('it worked');
            res.json({'success':'true'});
        }
    });
});

module.exports = router;