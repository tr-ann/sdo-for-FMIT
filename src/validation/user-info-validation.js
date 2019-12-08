import Joi from 'joi'

export default Joi
    .object()
    .keys({
        user_id: Joi
            .number()
            .min(1)
            .required(),
        full_name: Joi
            .string()
            .min(1)
            .max(255)
            .optional(),
        description: Joi
            .string()
            .optional(),
        birthday: Joi
            .date()
            .required(),
        city: Joi
            .string()
            .min(1)
            .max(255)
            .optional(),
        address: Joi
            .string()
            .min(1)
            .max(255)
            .optional(),
    });
