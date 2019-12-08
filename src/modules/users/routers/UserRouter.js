import { Router } from 'express'
import userController from '../controllers/UserController'
import UserService from '../services/UserService'

const router = Router()

router.get('/:id', [], userController.readById)
router.post('/:id', userController.update)
router.delete('/:id', userController.destroy)
router.get('/', userController.readAll)
router.post('/', userController.create)

export default router