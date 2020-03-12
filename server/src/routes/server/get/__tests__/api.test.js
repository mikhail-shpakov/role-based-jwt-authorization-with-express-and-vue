const request = require('supertest')
const app = require('../../../../app')

/**
 * В реальном проекте тестовая база данных должна создаваться
 * перед каждым тестом со всеми таблицами и тестовыми данными
 * при помощи механизма миграции
 */

afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 500))
})

describe('../index.js', () => {
  it('when get request, should return status 200 and array of objects with servers', async () => {
    const res = await request(app)
      .get('/server')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userId: 'user1',
          serverName: 'server7',
          serverType: 'vds'
        })
      ])
    )
  })
})
