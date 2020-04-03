const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    userId: Joi.string().required(),
    serverName: Joi.string().required(),
    serverType: Joi.string().required()
  })
})
