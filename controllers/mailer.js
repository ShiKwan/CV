
require('dotenv').config();
var nodemailer = require('nodemailer')

module.exports = function (app) {
    
app.post('/api/mailer', function( req, res, next){
    console.log("req body : ", req.body);
    if(!req.body.name){
        console.log("name is empty")
    }else if(!req.body.email){
        console.log("email is empty")
    }else if(!req.body.subject){
        console.log("subject is empty")
    }else if(!req.body.message){
        console.log("message is empty")
    }else{
        console.log("weee")
    }
    const output = ` <h1> Someone contacted you! </h1>                        
                        <ul>
                        <li> Name : ${req.body.name}</li>
                        <li> Email : ${req.body.email}</li>
                        </ul>
                        Message: ${req.body.message} `

    console.log("here");
    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASS);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        // port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASS // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.name + ' <' + req.body.email + '>', // list of receivers
        to: '"SK Tan" <sk.tan97@gmail.com', // sender address
        subject: req.body.subject, // Subject line
        html: output
        // html: '<b>Hello world?</b>' // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: %s', info.messageId)
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        res.json("success");
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    })
});
}