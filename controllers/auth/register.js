const { nanoid } = require('nanoid');
const RequestError = require('../../helpers/RequestError');
const { User } = require('../../models/user');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const sendMail = require('../../helpers/sendMail');
const { BASE_URL } = process.env;

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw RequestError(409, 'Email in use');
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = nanoid();
    const result = await User.create({ name, email, password: hashPassword, avatarURL, verificationToken });
    const mail = {
        to: email,
        subject: 'Verify email',
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click to verify you email</a>`
    };

    await sendMail(mail);

    res.status(201).json({
        name: result.name,
        email: result.email
    });
};

module.exports = register;