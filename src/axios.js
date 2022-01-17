import axios from 'axios'

axios.defaults.baseURL = 'http://localhost/api'

axios.interceptors.request.use(function (config) {
  const user = localStorage.getItem('user')
  if (user) {
    const { token } = JSON.parse(localStorage.getItem('user'))
    config.headers.authorization = `Bearer ${token}`
    return config
  }
  return config
})
