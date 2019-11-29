import { Router } from 'express'
import BuildingController from '../controllers/buildingController'

const router = Router()
const buildingController = new BuildingController()

router.get('/:id', buildingController.readById);
router.post('/:id', buildingController.update);
router.delete('/:id', buildingController.destroy);
router.get('/', buildingController.readAll);
router.post('/', buildingController.create);

export default router;