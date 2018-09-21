/*
* 通过mutations间接更新state的多个对象方法
* */

import {
  RECEIVE_APPOINTMENTINFO,
  RECEIVE_STORELIST,
  RECEIVE_ACTIVITY_APPOINTMENT
} from './mutation-types';

import {
  reqAppointmentInfo,
  reqStoreList,
  reqActivity_Appointment
} from '../api';

export default {
  //请求社区列表
  async getStoreList({commit}){
    const res= await reqStoreList()
    let {flag,result}=res
    if (flag===1){
      let storeList=[]
      result.forEach((item)=>{
        if (item.Status===2|| item.Status===4 || item.Status===5) {
          storeList.push({ StoreCode:item.StoreCode,SourceType:item.SourceType,Name:item.Name})
        }
      })
      commit(RECEIVE_STORELIST,{storeList})
    }
  },
  //提交预约数据
 async getAppointmentInfo({commit},{userName,sex,bookTime,phone,storeCode,sourceType,verifyCode,success,CreateSource}){
    const res= await reqAppointmentInfo({userName,sex,bookTime,phone,storeCode,sourceType,verifyCode,CreateSource})
    const {flag,message}=res
    if (flag==='Y'){
      res.sex=sex
      commit(RECEIVE_APPOINTMENTINFO,{res})
      success && success(res)
    }else{
      layer.msg(message)
    }
  },
  //提交市场部通用活动数据
  async getActivity_Appointment({commit},{userName,sex,bookTime,phone,storeCode,sourceType,verifyCode,CreateSource,success}){
    const res= await reqActivity_Appointment({userName,sex,bookTime,phone,storeCode,sourceType,verifyCode,CreateSource})
    const {flag,message}=res
    if (flag==='Y'){
      res.sex=sex
      commit(RECEIVE_ACTIVITY_APPOINTMENT,{res})
      success && success(res)
    }else{
      layer.msg(message)
    }
  }
}
