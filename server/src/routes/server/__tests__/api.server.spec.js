const request = require('supertest')
const app = require('../../../app')
const loginUser = require('../../../__tests__/helpers/loginUser')

let accessToken

beforeAll(async () => {
  const tokens = await loginUser()
  accessToken = tokens.accessToken
})

describe('server', () => {
  it('when get request, should return status 200 and array of objects with servers', async (done) => {
    const res = await request(app)
      .get('/server')
      .set('Authorization', `Bearer ${accessToken}`)

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual([{
      id: 1,
      serverName: 'Супер сервер',
      serverType: 'vds'
    }])

    done()
  })

  it('when post request, should return status 200 and new server id', async (done) => {
    const res = await request(app)
      .post('/server')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        serverName: 'Супер сервер',
        serverType: 'vds'
      })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ id: 2 })

    done()
  })

  it('when patch request, should return status 204', async (done) => {
    const res = await request(app)
      .patch('/server')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        id: 1,
        serverName: 'new server name',
        serverType: 'new server type'
      })

    expect(res.statusCode).toEqual(204)

    done()
  })

  it('when delete request, should return status 204', async (done) => {
    const res = await request(app)
      .delete('/server')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ id: 1 })

    expect(res.statusCode).toEqual(204)

    done()
  })
})
