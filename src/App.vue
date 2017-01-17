<template>
  <div>
    <md-toolbar>
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
        <md-list-item @click="clickNav('全部')">
          <md-icon>list</md-icon> <span>全部</span>
        </md-list-item>

        <md-list-item @click="clickNav('精华')">
          <md-icon>thumb_up</md-icon> <span>精华</span>
        </md-list-item>

        <md-list-item @click="clickNav('分享')">
          <md-icon>share</md-icon> <span>分享</span>
        </md-list-item>

        <md-list-item @click="clickNav('问答')">
          <md-icon>question_answer</md-icon> <span>问答</span>
        </md-list-item>

        <md-list-item @click="clickNav('招聘')">
          <md-icon>people</md-icon> <span>招聘</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import mutationTypes from './store/mutation-types'
  export default {
    name: 'app',
    data() {
      return {

      }
    },
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