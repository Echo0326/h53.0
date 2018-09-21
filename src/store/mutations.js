/*
* 直接更新state的多个方法对象
* */

import Vue from 'vue'
import {
  RECEIVE_APPOINTMENTINFO,
  RECEIVE_STORELIST,
  RECEIVE_ACTIVITY_APPOINTMENT

} from './mutation-types';


export default {
  //
  [RECEIVE_STORELIST](state,{storeList}){
    state.storeList=storeList;
  },
  //
  [RECEIVE_APPOINTMENTINFO](state,{res}){
    state.appointmentInfo=res;
  },
  [RECEIVE_ACTIVITY_APPOINTMENT](state,{res}){
    state.activity_appointment=res;
  },


}
