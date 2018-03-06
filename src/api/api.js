import axios from 'axios'
import qs from 'qs'

import url from './api_url'

// axios 配置
axios.defaults.timeout = 60000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '/';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(!res.data.success){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});

export function fetch(url, params, type = 'get') {
    return new Promise((resolve, reject) => {
        axios.request({
            method: type,
            url: url,
            data: params
        })
        .then(res => {
            resolve(res.data)
        }, err => {
            reject(err)
        })
        .catch(error => {
            reject(error)
        })
    })
}

export default {
    Login(params) {
        return fetch(url.login, params, 'post')
    }
}
