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
//  import { mapState, mapMutations } from 'vuex'
//  import mutationTypes from './store/mutation-types'

  export default {
    name: 'app',
   // computed: mapState(['toolbarTitle']),
    // methods: {
    //   toggleSidenav() {
    //     this.$refs.sidenav.toggle();
    //   },
    //   clickNav(title) {
    //     this.$refs.sidenav.toggle();
    //     this.$store.commit(mutationTypes.CHANGE_TOOLBAR_TITLE, title)
    //   }
    // }
  }
</script>
<style scoped>
  
  
  .toolbar {
    position: fixed;
    width: 100%;
    top: 0px;
    height: 40%
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
</style>