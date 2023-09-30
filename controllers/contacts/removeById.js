const { Contact } = require('../../models/contact');
const RequestError = require("../../helpers/RequestError.js");

const removeById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
        throw RequestError(404);
    }
    res.json({
        message: "Delete success",
    });
};

module.exports = removeById;
