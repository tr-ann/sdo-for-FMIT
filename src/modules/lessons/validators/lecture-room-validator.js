import Joi from 'joi'

export default Joi.object().keys({
    number:         Joi.string().min(3).max(3).required(),
    seats_count:    Joi.number().min(0).required(),
    room_type_id:   Joi.number().min(1).required(),
    building_id:    Joi.number().min(1).required(),
})