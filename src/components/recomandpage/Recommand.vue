<template>
  <div id="poster">
    <el-container>
      <el-header height="20px"></el-header>
      <el-container>
        <el-aside width="60%" style="padding-left:50px;padding-right: 30px">
          <vueper-slides
              fade
              class="no-shadow thumbnails"
              ref="slidesContent"
              @slide="$refs.slidesView.goToSlide($event.currentSlide.index, { emit: false })"
              fixed-height="100%"
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
                  <div class="rateAndType">
                    <rate
                        :grade=slide.rate
                        style="margin-right: 20px"
                    >
                    </rate>
                    <el-tag
                        style="margin: 3px"
                        :key="category.id"
                        effect="dark"
                        v-for="category in slide.categories"
                    >
                      {{category.type}}
                    </el-tag>
                  </div>
                  <div class="movie-profile">
                    <p>导演：{{slide.director}}</p>
                    <p>编剧：{{slide.scriptwriter}}</p>
                    <p>主演：{{slide.actors}}</p>
                    <p>国家/地区：{{slide.district}}</p>
                    <p>语言：{{slide.language}}</p>
                    <p>时长：{{slide.duration}}分钟</p>
                  </div>
                </div>
              </template>
            </vueper-slide>
          </vueper-slides>
        </el-aside>
        <el-main>
          <div class="main-slide">
            <div class="top-n slides">
              <vueper-slides
                  ref="slidesView"
                  :autoplay="false"
                  @slide="$refs.slidesContent.goToSlide($event.currentSlide.index, { emit: false })"
                  3d
                  fixed-height="380px"
                  :arrows="false"
                  :bullets="false"
                  style="width: 260px;"
              >
                <vueper-slide
                    v-for="(slide,i) in slides"
                    :key="i"
                    :image="slide.cover" />
              </vueper-slides>
              <div class="arrows" style="margin-top: 20px">
                <img class="icon-arrow-left" alt="" src="../../assets/ico/arrowLeft.png" @click="$refs.slidesView.previous()"/>
                <img class="icon-arrow-right" alt="" src="../../assets/ico/arrowRight.png" @click="$refs.slidesView.next()" />
              </div>
            </div>
            <div class="function">
              <div>
                <img src='../../assets/ico/more.png' alt="" @click="playvideo"/>
                <span class="play">详细信息</span>
              </div>
              <div>
                <img src='../../assets/ico/refresh.png' alt="" @click="refresh"/>
                <span class="refresh">重新生成</span>
              </div>
              <div>
                <img v-if="!isCollected" src='../../assets/ico/emptyheart.png' @click="onCollectClick"/>
                <img v-else src="../../assets/ico/fullheart.png" @click="onCollectClick"/>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import Rate from "@/components/common/Rate"
import 'vueperslides/dist/vueperslides.css'
import '../../assets/my-ele-css/my-loading.css'
export default {
  name: "Recommand",
  components: {VueperSlide, VueperSlides,Rate},
  data: () => ({
    isCollected: false,
    slides: []
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
    loadMovies () {
      const _this = this;
      _this.slides = []
      this.$axios.get('/movies').then(resp => {
        console.log(resp.status)
        console.log(resp.data)
        if (resp && resp.status === 200) {
          _this.slides = resp.data
        }
      }).catch(failResponse => {
        this.$alert('请求失败请稍后重试...')
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
  },
  mounted() {
    this.loadMovies();
  }
}
</script>

<style scoped>

  p {
    color: #3a91ba;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }

  div.slide-content p.count {
    font-size: 45px;
    margin-top: 20px;
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
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .function span {
    color: #3a91ba;
    padding-right: 70px;
    vertical-align: middle;
    padding-left: 15px;
  }

  .main-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /*
  .arrows {
    margin-top: 30px;
    padding-right: 60px;
  }*/
  .arrows img:hover {
    transform: scale(1.2);
  }
  /*
  .icon-arrow-right {
    margin-left: 15px;
  }

  .icon-arrow-left {
    margin-right: 15px;
  }
  */
  .rateAndType {
    display: flex;
    align-items: center;
  }
</style>