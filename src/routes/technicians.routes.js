const { Router } = require('express')
const TechnicianCtrl = require('../controllers/technician.controller')
const router = Router()

router.post('/', TechnicianCtrl.create)
router.get('/', TechnicianCtrl.search)
router.put('/:id', TechnicianCtrl.update)
router.delete('/', TechnicianCtrl.delete)

module.exports = router