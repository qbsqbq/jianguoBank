
const App = getApp();
const Util = require('./util')
const Des = require('./3des')
const Rsa = require('./rsa')
const MD5 = require('./md5')

const baseUrl = ''; //uat环境
const imageUrl = ''; //uat图片

// 网络请求
const https = ({
  url = '',
  data = {},
  method
} = {}) => {
  wx.showNavigationBarLoading()
  wx.showLoading({
    title: '加载中...'
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method: method,
      data: paramsData(data),
      complete: (res) => {
        wx.hideNavigationBarLoading()
        wx.hideLoading();
        if (res && res.data && res.data.resKey) {
          let resKey = Rsa.decrypt_rsa(res.data.resKey)
          let resData = Des.decrypt_3des(res.data.resData, resKey)
          // console.log(resData)
  
          // let resParm = resData.substr(1, resData.length-2)+resKey
          // let resParm = resData+resKey
          // console.log(resParm)
          // console.log(resKey)
          // let sign = MD5.hexMD5(resParm).toLowerCase()
          // console.log(sign)
          // console.log(res.data.resSign)
          // if (sign === res.resKey) {
          //   let resJson = JSON.parse(resData)
          // }
  
          let resJson = JSON.parse(resData)
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(resJson)
          } else {
            reject(resJson)
          }
        }else{
          wx.showModal({
            title: '提示',
            content: '系统错误,请稍后再试!',
            showCancel: false
          })
        }
      }
    });
  });
}

// 拼装加密参数
const paramsData = (data = {}) => {
  console.log(data)
  // json转string
  let paramStr = Util.jsonToString(data)
  // 随机生成32位字符串key
  let key32 = Util.randomString(32)
  // 参数转3des加密数据
  let paramData = Des.encrypt_3des(paramStr, key32)
  // rsa加密随机32位字符串
  let rsa_en = Rsa.encrypt_rsa(key32)
  // md5加密(参数+随机32位key)
  let sign = MD5.hexMD5(paramStr + key32).toLowerCase()
  return {
    data: paramData,
    key: rsa_en,
    sign: sign
  }
}

// get方法
const get = (url, data = {}) => {
  return https({
    url,
    method: 'GET',
    data
  })
}
// post方法
const post = (url, data = {}) => {
  return https({
    url,
    method: 'POST',
    data
  })
}

module.exports = {
  baseUrl,
  imageUrl,
  get,
  post
}
