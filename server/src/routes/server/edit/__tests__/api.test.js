const request = require('supertest')
const app = require('../../../../app')

afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 500))
})

describe('/server', () => {
  it('when user send correct request, should return status 200', async () => {
    const res = await request(app)
      .patch('/server')
      .send({
        userId: 'user1',
        serverName: 'server7',
        serverType: 'vds'
      })

    expect(res.statusCode).toEqual(200)
  })

  it('when user send incorrect request, should return status 400', async () => {
    const res = await request(app)
      .patch('/server')
      .send({
        userId: 'user1'
      })

    expect(res.statusCode).toEqual(400)
  })
})
