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



        <md-whiteframe md-tag="section" class="main-container" style="padding:0px 15px;padding-bottom: 15px;">
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
        <br>
        <md-whiteframe md-tag="section" style=" background:white;padding:0px 15px;padding-bottom: 15px;">
            <div class="has-ripple count-title">
                {{data.reply_count}}&nbsp;回复
            </div>
            <md-list class="custom-list md-triple-line">
                <md-list-item v-for="(reply,index) in data.replies">
                    <md-avatar>
                        <img v-bind:src="reply.author.avatar_url">
                    </md-avatar>

                    <div class="md-list-text-container">
                        <span class="reply-info">{{reply.author.loginname}}&nbsp; {{index+1}}楼 &nbsp;{{reply.create_at | timeAgo}}</span>
                        <div v-html="reply.content"></div>
                    </div>
                    
                    
                    <md-button class="md-icon-button md-list-action">
                        <md-icon class="md-primary">thumb_up</md-icon>
                    </md-button>
                    <md-button class="md-icon-button md-list-action">
                        <md-icon class="md-primary">reply</md-icon>
                    </md-button>

                    <md-divider class="md-inset"></md-divider>
                </md-list-item>


            </md-list>
        </md-whiteframe>

    </div>
</template>
<script>
    import { get } from '../api'
    export default {
        name: 'topic',
        data() {
            return {
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
        },
        methods: {

        },
        watch:{
            $route(){
                fetchData(this.$route.params.id).then(data=>{
                    this.data = data
                    setTimeout(()=>{prettyPrint()},1)
                })
            }
        }
    }
        function fetchData(id) {
        return get('topic/' + id).then(data => {
            console.log(data);
            if (data.success) {
                return data.data;
                
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
    
    .count-title {
        height: 34px;
        line-height: 48px;
    }
    
    .reply-info {
        font-size: 12px;
        color: #a0a0a0
    }
</style>