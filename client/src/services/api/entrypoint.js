import axios from 'axios'

const url = process.env.NODE_ENV === 'production'
  ? 'https://timeweb-test-task.site/api' // TODO исправить url
  : 'http://localhost:8081'

export default () => axios.create({ baseURL: url })
