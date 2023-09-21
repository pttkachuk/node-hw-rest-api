const contacts = require("../../models/contacts");
const RequestError = require("../../helpers/RequestError.js");

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.updateContactById(contactId, req.body);
    if (!result) {
        throw RequestError(404);
    }
    res.status(201).json(result)
};

module.exports = updateById;