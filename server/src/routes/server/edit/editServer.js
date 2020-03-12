// const transaction = require('../../../db/transaction')
//
// module.exports = async (row) => {
//   const {
//     server_name,
//     server_type,
//     user_id
//   } = row
//
//   const sql = 'UPDATE servers SET server_name = $1, server_type = $2 WHERE user_id = $3;'
//   const value = [server_name, server_type, user_id]
//
//   try {
//     await transaction(sql, value)
//     return true
//   } catch (e) {
//     console.log(e)
//     return false
//   }
// }
