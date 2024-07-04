import axios from 'axios'
import config from '../config'

// Config axios defaults.
const AxiosInstance = axios.create({
  baseURL: config.baseUrl,
  timeout: 20000
})
  
AxiosInstance.interceptors.request.use(conf => {
  
  const newConf = { ...conf }
  // newConf.headers.common['Cache-Control'] = 'no-cache'
  return newConf
})

AxiosInstance.interceptors.response.use(
  config => config,
  error => {
   console.log(error)
    return Promise.reject(error)
  }
)
export default AxiosInstance
