const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    refreshToken: Joi.string().guid().required(),
    fingerprint: Joi.string().required()
  })
})
