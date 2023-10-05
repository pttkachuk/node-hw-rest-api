const express = require('express')
const validateBody = require('../../middlewares/validateBody');
const authenticate = require('../../middlewares/authenticate');
const ctrlWrapper = require('../../helpers/ctrlWrapper');
const { schemas } = require('../../schemas/addContactsSchema');
const router = express.Router()
const ctrl = require('../../controllers/contacts')

router.use(authenticate);

router.get('/', ctrlWrapper(ctrl.getAll))

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validateBody(schemas.addContactSchema), ctrlWrapper(ctrl.add));

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

router.put('/:contactId', validateBody(schemas.addContactSchema), ctrlWrapper(ctrl.updateById));

router.patch('/:contactId/favorite', validateBody(schemas.updateFavorite), ctrlWrapper(ctrl.updateFavorite))

module.exports = router
