import { Router } from 'express'
import { userFilter, readUserFilter } from '../../../loaders/filter'
import userController from '../controllers/UserController'

const router = Router()

router.get('/:id',  readUserFilter, userController.readById)
router.post('/:id', userFilter, userController.update)
router.get('/:id/edit', userFilter, (req, res, next) => {
    let userPhones = ''
    for (let phone of req.user.phones) {
        userPhones += phone.phone
    }

    res.render('editUser', { currentUser: req.user, phones: userPhones })
})
router.delete('/:id', userController.destroy)
router.get('/', userController.readAll)
router.post('/', userController.create)

export default router