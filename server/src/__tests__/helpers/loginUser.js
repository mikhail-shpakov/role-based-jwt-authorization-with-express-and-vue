// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest')
const app = require('../../app')

const loginUser = async () => {
  const login = await request(app)
    .post('/auth/login')
    .send({
      username: 'admin',
      password: 'admin',
      fingerprint: 'some fingerprint'
    })

  return login.body
}

module.exports = loginUser
