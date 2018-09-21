/*
* 包含N个接口请求函数模块
* */
import ajax from "./ajax"
const BASE_H5='base_h5'
const BASE_CMS='base_cms'
const BASE_CRM='base_crm'

//发送预约短信
export const reqAppointmentMessage=(phone,type)=>ajax(BASE_CMS,`/api/Common/GeVerificationCode`,{phone,type},'GET',true)
//请求社区列表
export const reqStoreList=()=>ajax(BASE_CMS,`/api/Store/GetDataList`,{currentPage:1,pageSize:9999,sourceType:1},'POST',true)

//提交预约数据
export const reqAppointmentInfo=({userName,sex,bookTime,phone,storeCode,sourceType,verifyCode,CreateSource})=>(
  ajax(BASE_CMS,`/api/Reservation/Appointment`,
    {userName,sex,bookTime,phone,storeCode,sourceType,verifyCode,CreateSource},
    'POST',
    true
  )
);
//市场部通用活动预约信息
export const reqActivity_Appointment=({userName,sex,bookTime,phone,storeCode,sourceType,verifyCode,CreateSource})=>(
  ajax(BASE_CMS,`/api/Reservation/Activity_Appointment`,
    {userName,sex,bookTime,phone,storeCode,sourceType,verifyCode,CreateSource},
    'POST',
    true
  )
);
//请求签到信息
export const reqSignInInfo=({Name,phone,verifyCode,CreateSource})=>(
  ajax(BASE_CMS,`/api/Reservation/Activity_Signin`,
    {Name,phone,verifyCode,CreateSource},
    'POST',
    true
  )
);
//请求安卓下载地址
export const reqAndroidDownloadUrl=()=>ajax(BASE_CMS,`/api/AppCrm/getAndroidDownloadUrl`)



