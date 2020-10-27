<template>
  <div class="movieSetBG">
    <el-container style="background: rgba(109,114,120,0.1);margin:20px 20px">
        <el-header height="30%" v-if="categoryView">
          <movies-nav @categorySelect="listByCategory" ref="categories"></movies-nav>
        </el-header>
        <el-main v-if="categoryView">
          <movies-view ref="movieView"></movies-view>
        </el-main>
        <el-main v-else>
          <movies-view ref="movieView"></movies-view>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import MoviesNav from "@/components/moviepage/MoviesNav";
import MoviesView from "@/components/moviepage/MoviesView";

export default {
  name: "MovieSet",
  components: {MoviesView, MoviesNav},
  data() {
    return{
      categoryView: true
    }
  },
  methods: {
    listByCategory() {
      this.categoryView = true
      const _this = this
      const cid = _this.$refs.categories.cid
      const dateOrRate = _this.$refs.categories.dateOrRate
      const url = 'movies/category/' + cid + '/' + dateOrRate
      console.log(url)
      _this.$axios.get(url).then(resp=>{
        if (resp && resp.status === 200) {
          this.$refs.movieView.movies = resp.data
        }
      })
    },
  }
}
</script>

<style scoped>

</style>