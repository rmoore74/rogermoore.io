var nodemailer = require('nodemailer');
var sendmail   = require('sendmail');
var express    = require('express');
var router     = express.Router();

var config     = require('../config/mail.conf');

router.post('/sendemail', function(req, res) {

    // store http headers in variables
    var name    = req.body.nameInput;
    var email   = req.body.emailInput;
    var message = req.body.messageInput;

    console.log(req.body);

    sendmail({
        from: name,
        to: 'me@rogermoore.io',
        subject: 'CONTACT FORM: ' + name + ' - ' + email,
        html: message,
    }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });

    // create transporter to send email
    // var transporter = nodemailer.createTransport('smtps://' + config.user + ':' + config.pass + '@smtp.gmail.com');

    // define mailing options
    // var mailOptions = {
    //     from: name,
    //     to: 'me@rogermoore.io',
    //     subject: 'CONTACT FORM: ' + name + " - " + email,
    //     text: message
    // }

    // use transporter object to send email
    // transporter.sendMail(mailOptions, function(err, response) {
    //     if (err) {
    //         console.log(err);
    //         res.json({'success':'false'});
    //     } else {
    //         console.log('it worked');
    //         res.json({'success':'true'});
    //     }
    // });
});

module.exports = router;