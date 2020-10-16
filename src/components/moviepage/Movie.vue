<template>
  <div class="movie-view">
    <div class="movie-container">
      <video
          id="movie-play"
          class="video-js vjs-default-skin vjs-big-play-centered"
          width=900 height=600
          controls
          poster=""
      >
        <source src="../../assets/hero.mp4" type="video/mp4"/>
      </video>
    </div>
    <el-divider content-position="left">动作电影</el-divider>
  </div>
</template>

<script>
export default {
  name: "Movie"
}
</script>

<style scoped>

</style>