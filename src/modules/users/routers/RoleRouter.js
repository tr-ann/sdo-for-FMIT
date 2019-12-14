import { Router } from 'express'
import RoleController from '../controllers/RoleController'
import RoleService from '../services/RoleService'

const router = Router()

router.get('/:id', RoleController.readById)
router.post('/:id', RoleController.update)
router.delete('/:id', RoleController.destroy)
router.get('/', RoleController.readAll)
router.post('/', RoleController.create)

export default router