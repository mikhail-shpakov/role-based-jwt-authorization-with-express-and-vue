const { celebrate, Joi, Segments } = require('celebrate')

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.number().integer().required(),
    serverName: Joi.string().required(),
    serverType: Joi.string().required()
  })
})
