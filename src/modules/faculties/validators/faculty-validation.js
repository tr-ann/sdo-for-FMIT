import Joi from 'joi'

export default Joi
    .object()
    .keys({
        name: Joi
            .string()
            .min(5)
            .max(100)
            .required(),
        short_name: Joi
            .string()
            .min(2)
            .max(50)
            .required(),
    });
