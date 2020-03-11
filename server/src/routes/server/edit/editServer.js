const transaction = require('../../../db/transaction')

module.exports = async (row) => {
  const {
    server_name,
    server_type,
    customer_id
  } = row

  const sql = 'UPDATE servers SET server_name = $1, server_type = $2 WHERE customer_id = $3;'
  const value = [server_name, server_type, customer_id]

  try {
    await transaction(sql, value)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
