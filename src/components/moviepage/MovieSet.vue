<template>
  <el-container>
    <el-header height="50px"></el-header>
    <el-container>
      <el-aside width="30%">
        <movies-nav></movies-nav>
      </el-aside>
      <el-main>
        <movies-view></movies-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MoviesNav from "@/components/moviepage/MoviesNav";
import MoviesView from "@/components/moviepage/MoviesView";
export default {
  name: "MovieSet",
  components: {MoviesView, MoviesNav}
}
</script>

<style scoped>

</style>