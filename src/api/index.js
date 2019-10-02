/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 17:42:55
 * @LastEditTime: 2019-08-15 14:58:31
 * @LastEditors: Please set LastEditors
 */
/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
// import QS from 'qs'
import { Toast } from 'vant'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8080'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://localhost:8080'
}

// 请求超时时间
axios.defaults.timeout = 10000

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(config => {
  // 请求处理
  return config
}, err => {
  // 处理请求错误
  return Promise.reject(err)
})

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 500:
          Toast({
            message: '系统错误',
            duration: 1000,
            forbidClick: true
          })
          break
        case 201:
          Toast({
            message: '业务失败！',
            duration: 1000,
            forbidClick: true
          })
          break
          // 其他错误，直接抛出错误提示
        default:
          Toast({
            message: '失败',
            duration: 1500,
            forbidClick: true
          })
      }
      return Promise.reject(error.response)
    }
  }
)
/**
     * get方法，对应get请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err.data)
    })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    // axios.post(url, QS.stringify(params)).then(res => {
    axios.post(url, params).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err.data)
    })
  })
}
