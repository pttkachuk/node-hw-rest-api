const express = require('express')
const validateBody = require('../../middlewares/validateBody');
const ctrlWrapper = require('../../helpers/ctrlWrapper');
const schema = require('../../schemas/contactsSchema');
const router = express.Router()
const ctrl = require('../../controllers/contacts')

router.get('/', ctrlWrapper(ctrl.getAll))

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validateBody(schema), ctrlWrapper(ctrl.add));

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

router.put('/:contactId', validateBody(schema), ctrlWrapper(ctrl.updateById));

module.exports = router
