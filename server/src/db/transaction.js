const { Pool } = require('pg')
const config = require('../config/postgresConfig')
const pool = new Pool(config)

const transaction = async (sql, value) => {
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    await client.query(sql, value)
    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }
}

module.exports = transaction
