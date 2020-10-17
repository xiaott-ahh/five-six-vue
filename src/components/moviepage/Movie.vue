<template>
  <div class="movie-view">
    <div class="hot-title">
      <el-carousel height="500px">
        <el-carousel-item
          v-for="(slide,i) in slides"
          :key="i"
          >
          <img :src="slide.image" style="width: 100%;height: 100%"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="movie-content" style="margin-top: 70px">
      <div class="carousel">
        <h1>---动作---</h1>
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item
              v-for="(slide,i) in slides"
              :key="i"
          >
            <img :src="slide.image" style="width: 100%;height: 100%"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="carousel">
        <el-divider content-position="left">爱情</el-divider>
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item
              v-for="(slide,i) in slides"
              :key="i"
          >
            <img :src="slide.image" style="width: 100%;height: 100%"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="carousel">
        <el-divider content-position="left">动画</el-divider>
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item
              v-for="(slide,i) in slides"
              :key="i"
          >
          <img :src="slide.image" style="width: 100%;height: 100%"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <el-divider content-position="left">科幻</el-divider>
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item
              v-for="(slide,i) in slides"
              :key="i"
          >
            <img :src="slide.image" style="width: 100%;height: 100%"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="carousel">
        <el-divider content-position="left">喜剧</el-divider>
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item
              v-for="(slide,i) in slides"
              :key="i"
          >
            <img :src="slide.image" style="width: 100%;height: 100%"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from "@/components/common/Footer";
export default {
  name: "Movie",
  components: {Footer},
  data: () => ({

    slides: [
      { image: require('@/assets/movieImages/000000.jpg'),
      },
      { image: require('@/assets/movieImages/000001.jpg') },
      { image: require('@/assets/movieImages/000002.jpg') },
      { image: require('@/assets/movieImages/000003.jpg') },
      { image: require('@/assets/movieImages/000004.jpg') },
      { image: require('@/assets/movieImages/000005.jpg') },
      { image: require('@/assets/movieImages/000006.jpg') },
      { image: require('@/assets/movieImages/000007.jpg') },
      { image: require('@/assets/movieImages/000008.jpg') },
      { image: require('@/assets/movieImages/000009.jpg') },
      { image: require('@/assets/movieImages/000010.jpg') },
      { image: require('@/assets/movieImages/000011.jpg') }
    ]
  })
}

</script>

<style scoped>
  /deep/ .el-divider__text {
    color: white;
    font-size: 35px;
    background: #19242f;
  }

  div.carousel {
    margin-top: 80px;
  }
</style>