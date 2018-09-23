var consts = require('../const/const');
var logger = log4js.getLogger('mail.js');
const nodemailer = require('nodemailer');
var email = require('../../config/email');

module.exports = {
    //Send Mail
    sendMail: function (req, res){
        let transporter = email.createTransport();
        logger.debug("sendMail: transporter created successfully");
        let mailOptions = {
            from: req.query.name + '<'+ req.query.id + '>', //sender address
            to: consts.EMAIL.to, //list of receivers
            subject: "Email SEND",
            html: 'This is test sendMail', // html body
            auth: {
                user: consts.EMAIL.user,
                refreshToken: consts.EMAIL.refreshToken
            }
        };
        logger.debug("sendMail: mailOptions created");
        email.sendMail(transporter, mailOptions, res);
    }
}