import axios from 'axios'

const url = process.env.NODE_ENV === 'production'
  ? 'https://role-based-auth-express-vue.herokuapp.com'
  : 'http://localhost:8081'

export default () => axios.create({ baseURL: url })
