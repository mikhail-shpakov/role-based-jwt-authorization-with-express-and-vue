module.exports = {
  development: {
    username: 'dev',
    password: 'dev',
    database: 'dev',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'test',
    password: 'test',
    database: 'test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  }
}
