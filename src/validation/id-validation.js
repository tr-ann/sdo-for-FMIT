import Joi from 'joi'

export default Joi
    .object()
    .keys({
        id: Joi
            .number()
            .min(1)
            .required()
    });