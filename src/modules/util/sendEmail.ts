const nodemailer = require('nodemailer')

// async..await is not allowed in global scope, must use a wrapper
export const sendEmail = async(email: string, url: string) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    console.log('the email being sent', email, url)
    const testAccount = await nodemailer.createTestAccount()

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: email, // list of receivers
        subject: 'From Send Email Nodemailer', // Subject line
        text: `Your email confirmation <a href=${url}> ${url} </a>`, // plain text body
        html: `Click <a href=${url}> ${url} </a> to confirm your email`, // html body
    })

    console.log('Message sent: %s', info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

