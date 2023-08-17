const { Router } = require('express')
const ServiceCtrl = require('../controllers/service.controller')
const router = Router()

router.post('/', ServiceCtrl.create)
router.get('/', ServiceCtrl.search)
router.put('/:id', ServiceCtrl.update)
router.delete('/', ServiceCtrl.delete)

module.exports = router