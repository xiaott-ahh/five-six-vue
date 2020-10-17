<template>
  <div class="video-play">
    <div class="video-container">
      <video
          id="movie-play"
          class="video-js vjs-default-skin vjs-big-play-centered"
          width=90% height=650
          controls
          poster=""
      >
        <source src="../../assets/hero.mp4" type="video/mp4"/>
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPlay"
}
</script>

<style scoped>

</style>