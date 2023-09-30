const { Schema, model } = require('mongoose');
const handleSaveErrors = require('../helpers/handleSaveErrors');

const contactsSchema = new Schema({
    name: {
        type: String,
        required: [true, "Set name for contact"],
    },
    email: {
        type: String,
        match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    },
    phone: {
        type: String,
        unique: true,
        required: [true, "Set phone for contact"],
    },
    favorite: {
        type: Boolean,
        default: false,
    },
},
    { versionKey: false, timestamps: true }
);

contactsSchema.post("save", handleSaveErrors);
const Contact = model('contact', contactsSchema);
module.exports = {
    Contact
}

