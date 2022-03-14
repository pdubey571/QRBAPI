var nodemailer = require('nodemailer');
const crypto = require('crypto');

module.exports = {
    async sendSmsOtp() {

    },
    async sendEmail(toMail, subject, content) {

        // let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            // host: "smtp.ethereal.email",
            // port: 587,
            // secure: false,
            service: 'gmail',
            auth: {
                user: 'rakesh.joshi071986@gmail.com',
                pass: 'rakeshj0shi'
            }
        });

        return await transporter.sendMail({
            from: 'Qrbee',
            to: toMail,
            subject: subject,
            text: content,
            html: content
        }).then(res => {
            return res;
        }).catch((err)=>{console.log(err);
        return err;});
        // console.log(info);
        // return info;
    },
    validateEmail(mail) {
        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(mail)) {
            return true;
        }
        return false;
    },
    async generateToken(username) {
        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        return await crypto.createHash('sha1').update(current_date + random + username).digest('hex');
    }
}