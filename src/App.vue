<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Login from './pages/Login/Login'
    export default {
        name: 'App',
        components: {
            'v-login': Login
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">

</style>
