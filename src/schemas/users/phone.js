const Joi = require('@hapi/joi');

module.exports = {
  phones: Joi
    .array()
    .items( Joi
      .object()
      .keys({
        phone: Joi
          .string()
          .max(30)
      })
    )
    .optional()
}