import httpAxios from '../utils/http'
export const  buyer = {
    captcha:()=> httpAxios.get('/buyer/user/captcha'), //图形验证
    storelist:()=> httpAxios.get('/buyer/storelist'), //国家列表
    login:(params)=> httpAxios.post('/buyer/user/login',params), //登录
    goodslist:(params)=> httpAxios.post('/store/goods/list',params), //商品列表
    order:(params)=> httpAxios.post('/buyer/order/order',params) //订单列表
}

export const store = {

};