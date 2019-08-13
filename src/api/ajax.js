/*
封装ajax函数
 */
import axios from 'axios'

export default function ajax(url = '',data = {}, type = 'GET') {
  return new Promise (function (resolve,reject) {
    let promise
    if (type == 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key =>{
        dataStr += key + '=' + data(key) + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
    promise = axios.get(url)
    }else {
      promise = axios.get(url,data)
    }
    promise.then(response => {
      //成功返回
      resolve(response.data)
    }).catch(error => {
      //失败返回
      reject(error)
    })
  })
}
