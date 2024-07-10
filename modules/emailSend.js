const nodemailer = require('nodemailer');


class emailSend {
    async makeAccount(details) {
        const account = {
            user: "egrenyilo01@gmail.com",
            pass: "wxgy pmcl wzik egvs"
        };


        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: account.user,
                pass: account.pass,
            },
        });
        let info = await transporter.sendMail({
            from: details.from,
            to: "egrenyilo.mentalmuhely@gmail.com",
            subject: details.subject,
            text: "",
            html: details.html
        });
        return "Message sent: " + info.messageId;
    }

    async EmailSending(email) {
        let html = email.name + "<br>" + email.email + "<br>" + email.phone + "<br>" + email.text;

        const details = {
            from: email.email,
            to: "egrenyilo.mentalmuhely@gmail.com",
            html: html,
            subject: "Test " + email.name
        }
        return this.makeAccount(details);
    }

}

module.exports = new emailSend();
