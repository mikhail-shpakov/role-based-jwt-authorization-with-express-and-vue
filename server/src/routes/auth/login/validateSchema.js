const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    fingerprint: Joi.string().required()
  })
})
