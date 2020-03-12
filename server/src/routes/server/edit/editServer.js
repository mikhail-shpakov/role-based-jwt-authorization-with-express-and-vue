// const transaction = require('../../../db/transaction')
//
// module.exports = async (row) => {
//   const {
//     serverName,
//     serverType,
//     userId
//   } = row
//
//   const sql = 'UPDATE servers SET serverName = $1, serverType = $2 WHERE userId = $3;'
//   const value = [serverName, serverType, userId]
//
//   try {
//     await transaction(sql, value)
//     return true
//   } catch (e) {
//     console.log(e)
//     return false
//   }
// }
