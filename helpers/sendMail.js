const nodemailer = require('nodemailer');

const { MAIL_PASSWORD, MAIL_USER } = process.env;

const nodemailerConfig = {
    service: 'gmail',
    secure: true,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
    },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendMail = async (data) => {
    const mail = { ...data, from: MAIL_USER }
    await transport.sendMail(mail)
    return true
};

module.exports = sendMail;