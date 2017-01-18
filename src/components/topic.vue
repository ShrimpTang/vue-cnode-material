<template>
    <div>
        <div class="header-nav">
            <div class="main">
                <span v-if="data.top" class="topic-top title">置顶</span>
                <span v-else-if="data.good" class="topic-good title">精华</span>
                <span class="title">{{data.title}}</span>
            </div>
        </div>

        <div class="header-background">
        </div>

        <md-whiteframe md-tag="section"  style=" margin-top: 123px">
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
            saf<br>
        </md-whiteframe>
    </div>
</template>
<script>
    import { get } from '../api'
    export default {
        name: 'topic',
        data() {
            return {
                loading: false,
                error: false,
                data: {}
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.error = null;
                this.loading = true;
                get('topic/' + this.$route.params.id).then(data => {
                    this.loading = false;
                    console.log(data);
                    if (data.success) {
                        this.data = data.data;
                    }
                })
            }
        }
    }
</script>
<style scoped>
.title{
    color:white;
    font-size: 22px;
    font-weight: bold;
}
</style>