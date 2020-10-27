<template>
  <el-container style="background: rgba(109,114,120,0.1);margin:20px 20px">
    <el-main>
      <SearchView ref="movieView"></SearchView>
    </el-main>
  </el-container>
</template>

<script>
import SearchView from "@/components/searchResultPage/SearchView";
export default {
  name: "SearchResult",
  components:{SearchView},
  created() {
    let url = this.$route.query.url
    const keywords = this.$route.query.keywords
    this.$axios.get(url).then((resp) => {
      if (resp && resp.status === 200) {
        this.$refs.movieView.keywords = keywords
        this.$refs.movieView.movies = resp.data
      }
    })
  },
  watch :{
    // eslint-disable-next-line no-unused-vars
    $route () {
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>

</style>