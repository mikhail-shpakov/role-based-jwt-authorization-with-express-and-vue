/**
 * В реальном проекте все пароли, как минимум к production,
 * должны доставляться в приложение на этапе ci.
 * Для этого можно использовать, например, gitlab variables или vault
 */

const config = {
  production: {
    user: 'produser',
    host: 'db',
    database: 'prod',
    password: 'iAYG#gu@qaxey2G3',
    port: 5432
  },
  development: {
    user: 'devuser',
    host: 'localhost',
    database: 'dev',
    password: 'LIV8xSZ#BIji5o6J',
    port: 8090
  },
  test: {
    user: 'testuser',
    host: 'localhost',
    database: 'test',
    password: 'oHwqi7wg~rxZywFB',
    port: 8090
  }
}

module.exports = config[process.env.NODE_ENV]
