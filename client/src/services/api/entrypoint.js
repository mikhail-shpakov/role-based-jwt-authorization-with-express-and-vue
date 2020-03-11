import axios from 'axios'

export default () => {
  const url = process.env.NODE_ENV === 'production'
    ? 'https://timeweb-test-task.site/api'
    : 'http://localhost:8081'

  return axios.create({
    baseURL: url
  })
}
