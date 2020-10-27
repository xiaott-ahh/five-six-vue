<template>
  <div id="app">
    <nav-menu v-if="$route.meta.keepAlive" @showSearchResult="listByKeywords" ref="navMenuSearch"></nav-menu>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu";
export default {
  name: 'App',
  components : {NavMenu},
  methods: {
    listByKeywords() {
      let keywords =  this.$refs.navMenuSearch.keywords
      let url = 'search?keywords=' + keywords
      console.log(this.$route.path)
      this.$router.push({
        path:'/search',
        query:{
          url:url,
          keywords: keywords
        }
      })
    }
  }
}
</script>

<style scoped>
#app{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
