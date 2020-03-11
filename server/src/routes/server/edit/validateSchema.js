const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    customer_id: Joi.string().required(),
    server_name: Joi.string().required(),
    server_type: Joi.string().required()
  })
})
