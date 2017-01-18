<template>
  <div>
    <!--<md-toolbar class="toolbar">
      <md-button class="md-icon-button" @click="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">{{toolbarTitle}}</h2>
    </md-toolbar>
    <md-sidenav class="main-sidebar md-left md-fixed" ref="sidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">侧边导航内容</h3>
        </div>
      </md-toolbar>
      <md-list>
        <router-link to="/list/all">
          <md-list-item @click="clickNav('全部')">
            <md-icon>list</md-icon> <span>全部</span>
          </md-list-item>
        </router-link>

        <router-link to="/list/good">
          <md-list-item @click="clickNav('精华')">
            <md-icon>thumb_up</md-icon> <span>精华</span>
          </md-list-item>
        </router-link>

        <router-link to="/list/share">
          <md-list-item @click="clickNav('分享')">
            <md-icon>share</md-icon> <span>分享</span>
          </md-list-item>
        </router-link>

        <router-link to="/list/ask">
          <md-list-item @click="clickNav('问答')">
            <md-icon>question_answer</md-icon> <span>问答</span>
          </md-list-item>
        </router-link>

        <router-link to="/list/job">
          <md-list-item @click="clickNav('招聘')">
            <md-icon>people</md-icon> <span>招聘</span>
          </md-list-item>
        </router-link>
      </md-list>
    </md-sidenav>-->
    <div class="header">
      <header class="header">
        <div class="header-top">
          <div class="main">
            CNODE
          </div>
        </div>
        <div class="header-nav">
          <div class="main">
            <router-link to="/list/all" class="router">
              全部
            </router-link>
            &nbsp;&nbsp;
            <router-link to="/list/good" class="router">
              精华
            </router-link>
            &nbsp;&nbsp;
            <router-link to="/list/share" class="router">
              分享
            </router-link>
            &nbsp;&nbsp;
            <router-link to="/list/ask" class="router">
              问答
            </router-link>
            &nbsp;&nbsp;
            <router-link to="/list/job" class="router">
              招聘
            </router-link>
          </div>
        </div>
        <div class="header-background">

        </div>
      </header>
    </div>
    <!--<md-whiteframe id="main" md-tag="section">
      <router-view></router-view>
    </md-whiteframe>-->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import mutationTypes from './store/mutation-types'

  export default {
    name: 'app',
    computed: mapState(['toolbarTitle']),
    methods: {
      toggleSidenav() {
        this.$refs.sidenav.toggle();
      },
      clickNav(title) {
        this.$refs.sidenav.toggle();
        this.$store.commit(mutationTypes.CHANGE_TOOLBAR_TITLE, title)
      }
    }
  }
</script>
<style scoped>
  .main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
  }
  
  .toolbar {
    position: fixed;
    width: 100%;
    top: 0px;
    height: 40%
  }
  
  .header {
    height: 381px;
  }
  
  .header-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
    height: 60px;
    background-color: #FFFFFF;
  }
  
  .header-nav {
    position: fixed;
    top: 60px;
    right: 0;
    left: 0;
    z-index: 999;
    height: 48px;
    background-color: #303F9F;
  }
  
  .header-background {
    position: fixed;
    top: 108px;
    right: 0;
    left: 0;
    height: 213px;
    background-color: #303F9F;
  }

  .router:hover{
    text-decoration: none !important;
  }

  .router{
    color: white !important;
  }

  .router-link-active{
    background-color: #80bd01;
    color: #fff;
    padding: 3px 4px 3px 8px;
    border-radius: 3px;
  }
</style>