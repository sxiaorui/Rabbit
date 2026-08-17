import axios from "axios"

// 创建 axios 实例
const http = axios.create({
  baseURL: "https://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000
})

// 请求拦截器：携带 token 等
http.interceptors.request.use(
  config => {
    return config
  },
  e => Promise.reject(e)
)

// 响应拦截器：直接返回 res.data，统一错误处理
http.interceptors.response.use(
  res => res.data,
  e => Promise.reject(e)
)

export default http
