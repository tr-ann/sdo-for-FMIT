import validator from 'validator'

export function isValidUser(req, res, next) {
    validator.isEmail(req.body.username)
    validator.isLength(req.body.password, {min: 6})
}