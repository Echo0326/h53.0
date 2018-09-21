import axios from 'axios'
import qs from 'qs'
import { Indicator } from 'mint-ui';

import {BASE_H5,BASE_CMS,BASE_CRM} from './base.root.config'
console.log('BASE_CMS=',BASE_CMS)
console.log('process.env',process.env)

var timestamp = null;

//缓存处理
function addCache(key, value) {
  sessionStorage.setItem(key,value)
}

function getCache(key) {
  return sessionStorage.getItem(key)
}

function getTimestamp() {
  var from_date = new Date('1970/01/01');
  var end_date = new Date();
  var timestamp1 = (end_date - from_date) / 1000;
  return parseInt(timestamp1);
}
//获取token
function getAccessToken(callback, errorCallback) {
  var accessToken = getCache("accessToken");
  var dataToken

  if (accessToken && timestamp) {
    var tempTimestamp = getTimestamp();
    if (tempTimestamp - timestamp > 5400) {
      timestamp = getTimestamp();
      setAccessToken(function (data) {
        //return res.data.access_token
        callback(data)
      }, function () {
        // console.error("get account info failed");
      });
    } else {
      callback(accessToken);
    }
  } else {
    timestamp = getTimestamp();
    setAccessToken(function (data) {
      callback(data)
    }, function () {
      // console.error("get account info failed");
    })
  }
}

function setAccessToken(callback, errorCallback) {
  const token = axios.get(`${BASE_H5}/api/Token/GetAccessToken?appId=12345678&app_secret=123`)
  token.then((res)=>{
    addCache("accessToken", res.data.access_token);
    callback(res.data.access_token);
  }).catch((error)=>{
    errorCallback(error)
  })
}

//解析baseUrl
function getBase(base) {
  switch (base){
    case 'base_h5':
      return BASE_H5
    case 'base_cms':
      return BASE_CMS
    case 'base_crm':
      return BASE_CRM
  }
}

export default function ajax(base,url = '', data = {}, type = 'GET',loading=false) {
  return new Promise(function (resolve, reject) {
    if (loading){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake'
      });
      // var index = layer.load(2)
    }
    url=getBase(base)+url
    let promise
    return getAccessToken(function (accessToken) {
      if (url.indexOf("vlinker") > -1 ) {
        data.platform = "H5";
        data.access_token = accessToken;
      }
      if (type === 'GET') {
        // 准备 url query 参数数据
        let dataStr = ''
        // 数据拼接字符串
        Object.keys(data).forEach(key => {
          dataStr += key + '=' + data[key] + '&'
        })
        if (dataStr !== '') {
          dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
          url = url + '?' + dataStr
        }
        promise = axios.get(url)
      }else {
        promise = axios.post(url, qs.stringify(data))
      }
      promise.then(response => {
        //console.log("response-----",response)
        // layer.close(index)
        Indicator.close()
        resolve(response.data)
      }).catch(error => {
        // console.log("reject-----",error)
        // layer.close(index)
        Indicator.close()
        layer.msg("请求出错，请稍后再试！")
        reject(error)
      })
    })
  })
}


