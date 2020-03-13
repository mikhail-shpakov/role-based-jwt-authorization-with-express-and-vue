const request = require('supertest')
const app = require('../../app')
const defaultUser = require('../../tests/config/defaultUser')
const createUser = require('../../tests/helpers/createUser')
const getUser = require('../../tests/helpers/getUser')
const deleteUser = require('../../tests/helpers/deleteUser')

beforeAll(async () => {
  await createUser()
})

afterAll(async () => {
  const user = await getUser()
  await deleteUser(user.user_id)
})

describe('/login', () => {
  it('when user send correct login/pass, should return status 200 and user auth info', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        login: defaultUser.username,
        password: defaultUser.password
      })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      user_id: expect.any(Number),
      username: defaultUser.username,
      first_name: defaultUser.first_name,
      last_name: defaultUser.last_name,
      email: null,
      token: expect.any(String),
      subscribe: false,
      update: false
    })
  })

  it('when user send incorrect login, should return status 401', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        login: 'incorrect',
        password: defaultUser.password
      })

    expect(res.statusCode).toEqual(401)
  })

  it('when user send correct login and incorrect pass, should return status 401', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        login: defaultUser.username,
        password: 'incorrect'
      })

    expect(res.statusCode).toEqual(401)
  })
})
