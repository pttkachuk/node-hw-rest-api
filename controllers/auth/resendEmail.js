const RequestError = require('../../helpers/RequestError');
const sendMail = require('../../helpers/sendMail');
const { User } = require('../../models/user');
const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw RequestError(404, 'User not found')
    }

    if (user.verify) {
        throw RequestError(400, 'Verification has already been passed')
    }

    const mail = {
        to: email,
        sunject: 'Verify email',
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click to verify you email</a>`
    };

    await sendMail(mail);

    res.json({
        message: 'Email send success'
    })
};

module.exports = resendEmail;