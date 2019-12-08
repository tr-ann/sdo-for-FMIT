import { Router } from 'express'
import PhoneController from '../controllers/PhoneController'

const router = Router()

router.get('/:id', [], PhoneController.readById)
router.post('/:id', PhoneController.update)
router.delete('/:id', PhoneController.destroy)
router.get('/', PhoneController.readAll)
router.post('/', PhoneController.create)

export default router