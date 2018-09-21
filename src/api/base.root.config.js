//配置所有的基础路径
let base_h5,base_cms,base_crm,base_img,base_location_web,base_location_h5
const root=process.env.NODE_ENV

switch (root){
  case 'development':
    base_h5='https://uath5cms-admin.vlinker.com.cn'
    base_cms='https://uatcms.vlinker.com.cn'
    base_crm='https://uatcrm.vlinker.com.cn'
    base_img='https://sitimg.vlinker.com.cn'
    base_location_web='http://172.21.24.15:8088'
    base_location_h5='http://172.21.24.15:8099'
    break
  case 'production':
    base_h5='https://h5cms-admin.vlinker.com.cn'
    base_cms='https://www.vlinker.com.cn'
    base_crm='https://crm.vlinker.com.cn'
    base_img='https://img.vlinker.com.cn'
    base_location_web='http://market.vlinker.com.cn'
    base_location_h5='http://h5market.vlinker.com.cn'
    break
  case 'uatTest':
    base_h5='https://uath5cms-admin.vlinker.com.cn'
    base_cms='https://uatcms.vlinker.com.cn'
    base_crm='https://uatcrm.vlinker.com.cn'
    base_img='https://sitimg.vlinker.com.cn'
    base_location_web='http://uatmarket.vlinker.com.cn'
    base_location_h5='http://uath5market.vlinker.com.cn'
    break
  case 'sitTest':
    base_h5='https://sith5cms-admin.vlinker.com.cn'
    base_cms='https://sitcms.vlinker.com.cn'
    base_crm='https://sitcrm.vlinker.com.cn'
    base_img='https://sitimg.vlinker.com.cn'
    base_location_web='http://sitmarket.vlinker.com.cn'
    base_location_h5='http://sith5market.vlinker.com.cn'
    break
}

export const BASE_H5=base_h5
export const BASE_CMS=base_cms
export const BASE_CRM=base_crm
export const BASE_IMG=base_img
export const BASE_LOCATION_WEB=base_location_web
export const BASE_LOCATION_H5=base_location_h5

