const { Schema, model } = require('mongoose');
const handleSaveErrors = require('../helpers/handleSaveErrors');
const emailRegexp = require('../helpers/emailRegexp');
const mongoosePaginate = require('mongoose-paginate-v2');

const contactsSchema = new Schema({
    name: {
        type: String,
        required: [true, "Set name for contact"],
    },
    email: {
        type: String,
        match: emailRegexp,
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
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
},
    { versionKey: false, timestamps: true }
);

contactsSchema.post("save", handleSaveErrors);
contactsSchema.plugin(mongoosePaginate);
const Contact = model('contact', contactsSchema);
module.exports = {
    Contact
}

