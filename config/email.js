const nodemailer = require('nodemailer');
var logger = log4js.getLogger('email.js');
var consts = require('../server/const/const');

module.exports = {
//Create Transport
createTransport: function(){
    let transporter = nodemailer.createTransport({
        host: consts.EMAIL.host,
        port: consts.EMAIL.port,
        secure: consts.EMAIL.secure,
        //true for 465, false for other ports like 587 false
        
        auth: {
            type: consts.EMAIL.type,
            clientId: consts.EMAIL.clientId,
            clientSecret: consts.EMAIL.clientSecret,

        }
    });
    return transporter;
},

//SEND MAIL
sendMail: function ( transporter, mailOptions, res ) {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            logger.debug("sendMail: Mail sending failed");
            res.send({ status: false, message: consts.FAIL, error });
        } else {
            logger.debug("sendMail: Mail sent successfully");
            res.send({ status: true, message: consts.SUCCESS, info });
        }
    });
}

}