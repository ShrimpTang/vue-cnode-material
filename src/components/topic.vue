<template>
    <div class="topic-page">
        <div class="header-nav">
            <div class="main">
                <span v-if="data.top" class="topic-top title">置顶</span>
                <span v-else-if="data.good" class="topic-good title">精华</span>
                <span class="title">{{data.title}}</span>
            </div>
        </div>

        <div class="header-background">
        </div>



        <md-whiteframe md-tag="section" style=" margin-top: 123px;background:white;padding:0px 15px">
            <md-list>
                <md-list-item>
                    <md-avatar>
                        <img v-bind:src="data.author.avatar_url" />
                    </md-avatar>
                    <span>发布与{{data.create_at | timeAgo}}&nbsp;&nbsp;作者{{data.author.loginname}}&nbsp;&nbsp; {{data.visit_count}}次浏览 &nbsp;&nbsp;来自{{data.tab | topicTab}}</span>
                </md-list-item>
            </md-list>
            <div v-html="data.content"></div>
        </md-whiteframe>
    </div>
</template>
<script>
    import { get } from '../api'
    export default {
        name: 'topic',
        data() {
            return {
                // loading: false,
                // error: false,
                data: {
                    author:{

                    }
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            fetchData(to.params.id).then(data=>{
                next(vm=>{
                    vm.data = data;
                     setTimeout(()=>{prettyPrint()},1)
                })
            })
        },
        created() {
           // this.fetchData();
        },
        methods: {

        }
    }
        function fetchData(id) {
        // this.error = null;
        // this.loading = true;
        return get('topic/' + id).then(data => {
           // this.loading = false;
            console.log(data);
            if (data.success) {
                return data.data;
                // this.data = data.data;
                // setTimeout(()=>{prettyPrint()},1)
                
            }
        })
    }
</script>
<style scoped>
    .title {
        color: white;
        font-size: 22px;
        font-weight: bold;
    }
</style>