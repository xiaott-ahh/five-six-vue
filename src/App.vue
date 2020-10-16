<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu";
import Footer from "@/components/common/Footer";
export default {
  name: 'App',
  components : {Footer, NavMenu}
}
</script>

<style scoped>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
