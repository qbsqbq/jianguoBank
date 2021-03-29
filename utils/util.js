
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

// 随机生成字符串
function randomString(e) {
  e = e || 32;
  var t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  a = t.length,
  n = "";
  for (var i = 0; i < e; i++) 
  n += t.charAt(Math.floor(Math.random() * a));
  return n
}

// json数据转字符串, 并去除首位"{"和末位"}"
function jsonToString(json) {
  var paramsStr = JSON.stringify(json);
    paramsStr = paramsStr.substr(1, paramsStr.length-2); 
    return paramsStr
}

// jsonstring处理, 并去除首位"{"和末位"}"
function jsonToString(json) {
  var paramsStr = JSON.stringify(json);
    paramsStr = paramsStr.substr(1, paramsStr.length-2); 
    return paramsStr
}

module.exports = {
  formatTime,
  randomString,
  jsonToString
}
