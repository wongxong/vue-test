import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 60000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '/';

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
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
        return fetch('/users/api/userLogin', params)
    }
}
