import api from '../../api/api'
import * as types from '../types'

const state = {
    // 用户登录状态
    loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
    // 用户登录信息
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    // 用户数据信息
    userData: []
}

const actions = {
    /**
     * 用户登录
     */
    setUserInfo({commit}, res) {
        localStorage.setItem('userInfo', JSON.stringify(res))
        localStorage.setItem('loginStatus', true)
        commit(types.SET_USER_INFO, res)
        commit(types.SET_LOGIN_STATUS, true)
    },

    /**
     * 请求用户信息
     */
    getUserData({commit}, id) {
        // commit()
        api.UserInfo(id)
            .then(res => {
                console.log(res)
                commit(types.GET_USER_DATA, res.data)
            })
    }
}

const getters = {

}

const mutations = {
    [types.SET_USER_INFO](state, res) {
        state.userInfo = res
    },
    [types.SET_LOGIN_STATUS](state, status) {
        state.loginStatus = status
    },
    [types.GET_USER_DATA](state, res) {
        state.userData = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
