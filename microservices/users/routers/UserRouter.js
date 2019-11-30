import { Router } from 'express'
import userController from '../controllers/UserController'

export default router = new Router()

router.get('/:id', [], userController.readById)
router.post('/:id', userController.update)
router.delete('/:id', userController.destroy)
router.get('/', userController.list)
router.post('/', userController.create)