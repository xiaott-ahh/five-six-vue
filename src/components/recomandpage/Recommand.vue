<template>
  <el-container>
    <el-header height="30px"></el-header>
    <el-container>
      <el-aside width="50%" style="padding-left:70px">
        <vueper-slides
            fade
            class="no-shadow thumbnails"
            ref="slidesContent"
            @slide="$refs.slidesView.goToSlide($event.currentSlide.index, { emit: false })"
            fixed-height="450px"
            :bullets="false"
            :touchable="false"
            :arrows="false">
          <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
          >
            <template v-slot:content>
              <div class="slide-content" align="left">
                <p class="count">NO.{{i+1}} {{slide.title}}({{slide.date}})</p>
                <star-rate :value=slide.rate
                           :disabled="true"
                           type="star1"/>
                <span class="rate-text" style="color: #3a91ba">{{slide.rate}}</span>
                <br/>
                <div class="movie-profile">
                  <p>导演：{{slide.director}}</p>
                  <p>编剧：{{slide.scriptwriter}}</p>
                  <p>主演：{{slide.actors}}</p>
                  <p>类型：{{slide.type}}</p>
                  <p>地区：{{slide.nation}}</p>
                </div>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
        <div class="function">
          <img src='../../assets/ico/more.png' alt="" @click="playvideo"/>
          <span class="play">详细信息</span>
          <img src='../../assets/ico/refresh.png' alt="" @click="refresh"/>
          <span class="refresh">重新生成</span>
          <span class="collect">
              <img v-if="!isCollected" src='../../assets/ico/emptyheart.png' @click="onCollectClick"/>
              <img v-else src="../../assets/ico/fullheart.png" @click="onCollectClick"/>
            </span>
        </div>
      </el-aside>
      <el-main>
        <div class="top-n slides" style="margin-left: 100px;align:center">
          <vueper-slides
              ref="slidesView"
              :autoplay="false"
              @slide="$refs.slidesContent.goToSlide($event.currentSlide.index, { emit: false })"
              3d
              fixed-height="380px"
              :arrows="false"
              :bullets="false"
              style="width: 260px;padding-left: 95px"
          >
            <vueper-slide
                v-for="(slide,i) in slides"
                :key="i"
                :image="slide.image" />
          </vueper-slides>
          <div class="arrows">
            <img class="icon-arrow-left" alt="" src="../../assets/ico/arrowLeft.png" @click="$refs.slidesView.previous()"/>
            <img class="icon-arrow-right" alt="" src="../../assets/ico/arrowRight.png" @click="$refs.slidesView.next()" />
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import StarRate from 'vue-cute-rate'
import '../../assets/my-ele-css/my-loading.css'
export default {
  name: "Recommand",
  components: {VueperSlide, VueperSlides,StarRate},
  data: () => ({
    isCollected: false,
    slides: [
      {
        image: require('@/assets/movieImages/000000.jpg'),
        url:"/assets/media/hero.mp4",
        title: '肖申克的救赎',
        director: '弗兰克·德拉邦特',
        scriptwriter: '弗兰克·德拉邦特 / 斯蒂芬·金',
        nation:'美国',
        date: '1994',
        actors: '蒂姆·罗宾斯 / 摩根·弗里曼 / 鲍勃·冈顿 / 威廉姆·赛德勒 ',
        type: '剧情 / 犯罪',
        rate: 9.7
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
  },
  created() {
    const loading = this.$loading({
      lock: true,
      text: '正在为您生成推荐',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 1)'
    });
    setTimeout(() => {
      loading.close();
    }, 1000);
  }
}
</script>

<style scoped>
  p {
    color: #3a91ba;
  }

  div.slide-content p.count {
    font-size: 45px;
    margin-top: 20px;
  }

  div.slide-content p{
    font-size: 30px;
  }

  div.slide-content p{
    font-size: 20px;
  }

  .function img:hover {
    transform: scale(1.2);
  }

  .function img {
    vertical-align: middle;
  }

  .function {
    margin-top: 60px;
    margin-bottom: 20px;
  }

  .function span {
    color: #3a91ba;
    padding-right: 80px;
    vertical-align: middle;
    padding-left: 15px;
  }

  span.collect {
  }

  .arrows {
    margin-top: 30px;
    padding-right: 60px;
  }
  .arrows img:hover {
    transform: scale(1.2);
  }

  .icon-arrow-right {
    margin-left: 15px;
  }

  .icon-arrow-left {
    margin-right: 15px;
  }
</style>