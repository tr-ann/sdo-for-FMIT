import { Router } from 'express'
import DepartmentController from '../controllers/buildingController'

const router = Router()

router.get('/:id', DepartmentController.readById)
router.post('/:id', DepartmentController.update)
router.delete('/:id', DepartmentController.destroy)
router.get('/', DepartmentController.readAll)
router.post('/', DepartmentController.create)

export default router