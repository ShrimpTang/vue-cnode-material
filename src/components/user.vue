<template>
    <div class="main-container">
        <!--dsadasdad {{this.$route.params.loginname}}-->
        <div style="display: flex;flex-direction:row">
<div style="flex: 1;
    height: 100%;
    max-width: 250px;
    background-color: lightblue;">
<img v-bind:src="data.avatar_url" style="width: 100%">
</div>
<div style="flex: 1;background-color: burlywood;margin-left: 12px">
2
</div>
</div>
</div>
</template>
<script>
    import { get } from '../api'
    export default {
        name: 'user',
        beforeRouteEnter(to, from, next) {
            fetchData(to.params.loginname).then(data => {
                next(vm => {
                    vm.data = data;
                })
            })
        },
        data() {
            return {
                data: {}
            }
        },
        computed:{
        },
        methods:{
            
        }
    }
    function fetchData(loginname) {
        return get('user/' + loginname)
            .then(data => {
                console.log(data);
                if (data.success) {
                    data.data.avatar_url = data.data.avatar_url.substring(0,data.data.avatar_url.lastIndexOf('?'));
                    return data.data;
                }
            })
    }
</script>