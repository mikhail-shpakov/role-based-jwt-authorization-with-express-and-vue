const request = require('supertest')
const app = require('../../../app')
const loginUser = require('../../../__tests__/helpers/loginUser')

describe('auth', () => {
  it('when user send correct username and password, should return status 200 and tokens', async (done) => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        username: 'admin',
        password: 'admin',
        fingerprint: 'some fingerprint'
      })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      accessToken: expect.any(String),
      refreshToken: expect.any(String)
    })

    done()
  })

  it('when user send incorrect username, should return status 401', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        username: 'incorrect username',
        password: 'admin',
        fingerprint: 'some fingerprint'
      })

    expect(res.statusCode).toEqual(401)
  })

  it('when user send correct username and incorrect password, should return status 401', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        username: 'admin',
        password: 'incorrect password',
        fingerprint: 'some fingerprint'
      })

    expect(res.statusCode).toEqual(401)
  })

  it('when user update tokens, should return status 200 and new tokens', async (done) => {
    const tokens = await loginUser()

    const res = await request(app)
      .post('/auth/refresh-tokens')
      .send({
        refreshToken: tokens.refreshToken,
        fingerprint: 'some fingerprint'
      })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      accessToken: expect.any(String),
      refreshToken: expect.any(String)
    })

    done()
  })

  it('when user logout, should return status 200', async (done) => {
    const tokens = await loginUser()

    console.log(tokens)

    const res = await request(app)
      .post('/auth/logout')
      .set('Authorization', `Bearer ${tokens.accessToken}`)
      .send({
        refreshToken: tokens.refreshToken
      })

    expect(res.statusCode).toEqual(200)

    done()
  })
})
