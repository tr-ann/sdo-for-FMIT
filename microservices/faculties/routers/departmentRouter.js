import { Router } from 'express'
import DepartmentController from '../controllers/buildingController'

export default router = Router()

router.get('/:id', DepartmentController.readById)
router.post('/:id', DepartmentController.update)
router.delete('/:id', DepartmentController.destroy)
router.get('/', DepartmentController.readAll)
router.post('/', DepartmentController.create)