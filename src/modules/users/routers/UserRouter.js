import { Router } from 'express'
import { userFilter } from '../../../loaders/filter'
import userController from '../controllers/UserController'

const router = Router()

router.get('/:id', userController.readById)
router.post('/:id', userFilter, userController.update)
router.get('/:id/edit', (req, res, next) => {
    console.log(req.user)
    res.render('editUser', { currentUser: req.user })
})
router.delete('/:id', userController.destroy)
router.get('/', userController.readAll)
router.post('/', userController.create)

export default router