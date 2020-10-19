<template>
  <div class="video-play">
    <div class="video-container">
      <video
          ref="video"
          id="movie-play"
          class="video-js vjs-default-skin vjs-big-play-centered"
          width=90% height=650
          controls
          poster=""
      >
        <source :src="movieUrl" type="video/mp4">
      </video>
    </div>
    <div class="rating comments">

    </div>
  </div>
</template>

<script>
export default {
  name: "MoviePlay",
  data() {
    return {
      movieUrl: this.$route.params.url
    }
  },
}
</script>

<style scoped>

</style>