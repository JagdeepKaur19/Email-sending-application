const express = require('express');
const app = express();
log4js = require('log4js');
const nodemailer = require('nodemailer');
var consts = require('./server/const/const.js')
var mail = require('./server/route/mail.js');

// log4js.configure({
//     appenders: [
//       { type: 'console' },
//       { type: 'file', filename: 'logs/server.log', category: 'server.js' }
//     ]
//   });


  log4js.configure({
    appenders: {'file': { type: 'file', filename: 'log/server.log' },
                'console': { type: 'console' } },
    categories: { 'default': { appenders: ['file', 'console'], level: 'info' } }
 });
var logger = log4js.getLogger('server.js');

app.post('/api/mailsend', mail.sendMail);

app.listen(consts.port, function(){
    console.log("hi")
    logger.info("Server started on port:", +consts.port);
    
})