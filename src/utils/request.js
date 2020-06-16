import axios from 'axios'
// import env from '../env'
import { Message } from 'element-ui'

/**
 * 当前封装规则：
 *  1）、后端返回的数据必须包含  code   message   data  三部分
 *  2）、对于code状态码的定义  0表示正常   10表示未登录   其他表示错误
 */

//创建一个axios实例,并配置基本信息
const service = axios.create({
    // baseURL: env.baseURL,
    baseURL:'/api',
    timeout: 8000
})

//请求拦截
service.interceptors.request.use(function (config) {
    //在发送请求之前做一些事情
    return config;
}, function (error) {
    //做一些有请求错误的事情
    return Promise.reject(error);
})

//响应拦截器
service.interceptors.response.use(function (response) {
    let res = response.data;
    if (res.status == 0) {
        //成功
        return res.data;
    } else if (res.status == 10) {
        //未登录
        window.location.href = '/#/login';
    } else {
        //错误
        return Promise.reject(res.message || 'Error');
    }
}, function (error) {
    //任何位于2xx范围之外的状态代码都会导致此函数触发/执行具有响应错误的操作
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error);
})

export default service