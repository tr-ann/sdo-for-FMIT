import { Router } from 'express'
import UserInfoController from '../controllers/UserInfoController'

const router = Router()

router.get('/:id', [], UserInfoController.readById)
router.post('/:id', UserInfoController.update)
router.delete('/:id', UserInfoController.destroy)
router.get('/', UserInfoController.readAll)
router.post('/', UserInfoController.create)

export default router