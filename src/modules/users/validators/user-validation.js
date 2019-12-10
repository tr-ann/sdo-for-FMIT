import Joi from 'joi'

export default Joi
    .object()
    .keys({
        login: Joi
            .string()
            .min(4)
            .max(30)
            .required(),
        password: Joi
            .string()
            .min(6)
            .max(30)
            .required(),
    })
