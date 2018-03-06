<template>
    <div id="app">
        <router-view></router-view>
        <Button>aaa</Button>
        <Select v-model="city" style="width: 200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{item.label}}</Option>
        </Select>
    </div>
</template>

<script>
    import Login from './pages/Login/Login'

    export default {
        name: 'App',
        components: {
            Login
        },
        data() {
            return {
                city: '',
                cityList: [
                    {
                        value: 'New York',
                        label: 'New YorkNew YorkNew YorkNew YorkNew YorkNew YorkNew YorkNew YorkNew YorkNew YorkNew York'
                    },
                    {
                        value: 'London',
                        label: 'london'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">

</style>
