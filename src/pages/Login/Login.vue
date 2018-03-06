<template>
    <div class="login">
        <div>
            <input type="text" v-model="username" placeholder="用户名">
        </div>
        <div>
            <input type="password" v-model="password" placeholder="密码">
        </div>
        <div>
            <button type="button" @click="_login">Login</button>
        </div>
    </div>
</template>

<script>
    import api from '../../api/api'
    import {mapActions} from 'vuex'
    export default {
        name: "login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapActions(['setUserInfo']),
            _login() {
                if(!this.username || !this.password){
                    alert('请填写完整')
                    return
                }
                let data = {
                    username: this.username,
                    password: this.password
                }
                api.Login(data)
                    .then(res => {
                        console.log(res)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
