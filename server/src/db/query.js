const { Pool } = require('pg')
const config = require('../config/postgresConfig')
const pool = new Pool(config)

const query = async (sql, value) => pool.query(sql, value)
  .catch(error => { throw error })

module.exports = query
