<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">My App</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="sidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">侧边导航内容</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item @click="$refs.sidenav.toggle()" class="md-primary">
          <md-icon>list</md-icon> <span>全部</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <md-icon>thumb_up</md-icon> <span>精华</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <md-icon>share</md-icon> <span>分享</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <md-icon>question_answer</md-icon> <span>问答</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <md-icon>people</md-icon> <span>招聘</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods:{
    toggleSidenav(){
    this.$refs.sidenav.toggle();
    }
  }
}
</script>