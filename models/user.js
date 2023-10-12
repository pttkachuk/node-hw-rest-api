const { Schema, model, modelNames } = require("mongoose");
const emailRegexp = require('../helpers/emailRegexp');
const handleSaveErrors = require("../helpers/handleSaveErrors");
const allowedSubscriptions = require("../helpers/allowedSubscriptions");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            minlenght: 6,
            required: [true, "Set password for user"],
        },
        email: {
            type: String,
            match: emailRegexp,
            required: [true, "Email is required"],
            unique: true,
        },
        token: {
            type: String,
            default: '',
        },
        subscription: {
            type: String,
            enum: allowedSubscriptions,
            default: "starter",
        },
        avatarURL: {
            type: String,
            required: true,
        }
    },
    { versionKey: false, timestamps: true }
);

userSchema.post('save', handleSaveErrors);

const User = model("user", userSchema);

module.exports = { User };