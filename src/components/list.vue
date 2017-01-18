<template>
    <md-whiteframe md-tag="section" class="container">
        <md-list>
            <md-list-item v-for="topic in data">
                <md-avatar>
                    <img v-bind:src="topic.author.avatar_url" alt="People">
                </md-avatar>
                <div>
                    <div class="info-content">
                        <span title="回复数" class="info replay-count">{{topic.reply_count}}</span>
                        <span class="info">/</span>
                        <span title="点击数" class="info click-count">{{topic.visit_count}}</span>
                    </div>
                    <span v-if="topic.top" class="top">置顶</span>
                    <span v-else-if="topic.good" class="good">精华</span>
                    <span v-else-if="topic.tab === 'share'" class="topiclist-tab">分享</span>
                    <span v-else-if="topic.tab === 'ask'" class="topiclist-tab">问答</span>
                    <span v-else-if="topic.tab === 'job'" class="topiclist-tab">招聘</span>
                    <span v-else class="topiclist-tab">暂无</span>
                    <span>{{topic.title}}</span>
                </div>

                <div>
                    <span class="last-active-time">
                        {{getDate(topic.last_reply_at)}}
                    </span>
                </div>
                <!--<md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">chat_bubble</md-icon>
                </md-button>-->
                <md-divider class="md-inset"></md-divider>
            </md-list-item>
        </md-list>
    </md-whiteframe>
</template>

<script>
import {get} from '../api'
import moment from 'moment'

export default {
    name:'list',
    created(){
        this.fetchData();
    },
    data(){
        return {
            loading:true,
            error:null,
            data:null
        }
    },
    methods:{
      fetchData(){
            var me = this;
            this.error = null;
            this.loading = true;
            get('topics',{tab:this.$route.params.type}).then((data)=>{
                this.loading = false;
                console.log(data.data)
                if(data.success){
                    this.data = data.data;
                }
            })
        },
        getDate(date){
            if(date){
                return moment(date).fromNow(); 
            }
            return ''
        }
    },
    watch:{
        '$route':'fetchData'
    },
    computed:{
        type(){
            return this.$route.params.type
        },
        
    }
}
</script>

<style scoped>
    .container {
        margin-top: -234px
    }
    
    .top,
    .good {
        background: #80bd01;
        padding: 2px 4px;
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
    }
    
    .topiclist-tab {
        background-color: #e5e5e5;
        color: #999;
        padding: 2px 4px;
        border-radius: 3px;
        font-size: 12px;
    }
    
    .info-content {
        width: 80px;
        float: left;
        text-align: center;
    }
    
    .replay-count {
        color: #9e78c0;
    }
    
    .click-count {
        color: #b4b4b4;
    }
    
    .info {
        font-size: 10px
    }
    
    .last-active-time {
        color: #778087;
        font-size: 10px;
    }
</style>