<template>
  <el-container>
    <el-header height="50px"></el-header>
    <el-container>
      <el-aside width="30%" style="padding-left:100px">
        <vueper-slides
            fade
            class="no-shadow thumbnails"
            ref="slidesContent"
            @slide="$refs.slidesView.goToSlide($event.currentSlide.index, { emit: false })"
            fixed-height="400px"
            :bullets="false"
            :touchable="false"
            :arrows="false">
          <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
          >
            <template v-slot:content>
              <div class="slide-content" align="left">
                <p class="count">NO.{{i+1}}</p>
                <p class="movie-title">{{slide.title}}</p>
                <p class="movie-profile">{{slide.content}}</p>
                <p class="movie-url" style="display: none">{{slide.url}}</p>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </el-aside>
      <el-main>
        <div class="top-n slides" style="margin-left: 160px;align:center">
          <vueper-slides
              ref="slidesView"
              :autoplay="false"
              @slide="$refs.slidesContent.goToSlide($event.currentSlide.index, { emit: false })"
              3d
              fixed-height="400px"
              arrows-outside
              :bullets="false"
              style="width: 250px;padding-left: 180px"
          >
            <template v-slot:arrow-left style="padding-right: 50px">
              <img class="icon-arrow-left" src="../../assets/ico/arrowLeft.png" />
            </template>
            <template v-slot:arrow-right>
              <img class="icon-arrow-right" src="../../assets/ico/arrowRight.png" />
            </template>
            <vueper-slide
                v-for="(slide,i) in slides"
                :key="i"
                :image="slide.image" />
          </vueper-slides>
          <div class="function">
            <img src='../../assets/ico/play.png' alt="" @click="playvideo"/>
            <span class="play">立即播放</span>
            <img src='../../assets/ico/refresh.png' alt="" @click="refresh"/>
            <span class="refresh">重新生成</span>
            <span class="collect">
              <img v-if="!isCollected" src='../../assets/ico/emptyheart.png' @click="onCollectClick"/>
              <img v-else src="../../assets/ico/fullheart.png" @click="onCollectClick"/>
            </span>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: "Recommand",
  components: {VueperSlide, VueperSlides},
  data: () => ({
    isCollected: false,
    slides: [
      {
        image: require('@/assets/movieImages/000000.jpg'),
        url:"/assets/media/hero.mp4",
        title: '电影名称1',
        content: '这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介'
      },
      {
        image: require('@/assets/movieImages/000001.jpg'),
        url:"",
        title: '电影名称2',
        content: '这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介'
      },
      {
        image: require('@/assets/movieImages/000002.jpg'),
        url:"../assets/hero.mp4",
        title: '电影名称3',
        content: '这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介'
      },
      {
        image: require('@/assets/movieImages/000003.jpg'),
        url:"../assets/hero.mp4",
        title: '电影名称4',
        content: '这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介'
      },
      {
        image: require('@/assets/movieImages/000004.jpg'),
        title: '电影名称5',
        url:"../assets/hero.mp4",
        content: '这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介'
      },
      {
        image: require('@/assets/movieImages/000005.jpg'),
        title: '电影名称6',
        url:"../assets/hero.mp4",
        content: '这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介这是电影简介'
      },
    ]
  }),
  methods: {
    playvideo() {
      const url = document.getElementsByClassName('movie-url')[0].innerHTML
      console.log(url)
      this.$router.push({
        name:'MoviePlay',
        params:{
          url:url
        }
      })
    },
    refresh() {
      const loading = this.$loading({
        lock: true,
        text: '正在为您生成推荐',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 1)'
      });
      setTimeout(() => {
        loading.close();
      }, 1000);
    },
    onCollectClick() {
      if (this.isCollected) {
        this.isCollected = false
      }else {
        this.isCollected = true
      }
    }
  }
}
</script>

<style scoped>
  p {
    color: #3a91ba;
  }

  div.slide-content p.count {
    font-size: 45px;
  }

  div.slide-content p.movie-title {
    font-size: 30px;
  }

  div.slide-content p.movie-profile {
    font-size: 20px;
  }

  .function img:hover {
    transform: scale(1.2);
  }

  .function img {
    vertical-align: middle;
  }

  .function {
    margin-top: 50px;
  }

  .function span {
    color: #3a91ba;
    padding-right: 80px;
    vertical-align: middle;
    padding-left: 15px;
  }

  span.collect {
  }

</style>