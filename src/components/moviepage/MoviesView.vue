<template>
  <div>
    <el-row style="height: 950px;">
      <el-tooltip effect="dark" placement="right"
                  v-for="item in movies.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                  :key="item.id"
      >
        <h1 slot="content" style="font-size: 24px;margin-bottom: 6px;">{{item.title}}({{item.date}})</h1>
        <div slot="content">
          <rate
              :grade=item.rate
          >
          </rate>
        </div>
        <p slot="content">导演：{{item.director}}</p>
        <p slot="content">编剧：{{item.scriptwriter}}</p>
        <p slot="content">主演：{{item.actors}}</p>
        <p slot="content">国家/地区：{{item.district}}</p>
        <p slot="content">语言：{{item.language}}</p>
        <p slot="content">时长：{{item.duration}}</p>
        <div class="categories" slot="content">
          <span class="tag-group__title">类型：</span>
          <el-tag
              style="margin: 3px"
              :key="category.id"
              effect="dark"
              v-for="category in item.categories"
          >
            {{category.type}}
          </el-tag>
        </div>
        <p slot="content" style="width: 300px" class="abstract">简介：{{item.abs}}</p>
        <el-card style="background-color:transparent;border:none;width: 135px;margin-bottom: 10px;height: 300px;float: left;margin-right: 25px" class="movie"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="item.cover" alt="海报">
          </div>
          <div class="title" style="padding-left: 10px;">
            <a href="">{{item.title}}</a>
            <span class="rate" style="font-size: 15px;color: #f9ca05;margin-left: 5px;margin-top: 2px">{{item.rate}}</span>
            <!--
            <img src="../../assets/ico/delete.png" style="width: 15px;height: 15px;padding-left: 5px;" class="el-icon-delete" @click="deleteMovie(item.id)" alt="delete"
            -->
          </div>
        </el-card>
      </el-tooltip>
    </el-row>
    <el-row>
      <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="movies.length">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import EditInformation from "@/components/admin/content/EditInformation";
import Rate from "@/components/common/Rate";

export default {
  name: 'MoviesView',
  components: {EditInformation,Rate},
  data () {
    return {
      currentPage:1,
      pageSize:21,
      movies: []
    }
  },
  mounted: function () {
    this.loadMovies()
  },
  methods: {
    loadMovies () {
      const _this = this;
      this.$axios.get('/movies').then(resp => {
        console.log(resp.status)
        console.log(resp.data)
        if (resp && resp.status === 200) {
          _this.movies = resp.data
        }
      })
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage)
    },
  }
}
</script>

<style scoped>

  .cover {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 172px;
    /*margin: 0 auto;*/
  }


  .title {
    font-size: 14px;
    display: flex;
    justify-content: center;
  }
  .abstract {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
    height: 50px;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }

  p {
    font-size: 15px;
    width: 320px;
  }

  /deep/ li.number.active{
    background: transparent !important;
  }

  /deep/ li.number {
    background: transparent !important;
  }

  /deep/ li.el-icon.more {
    background: transparent !important;
  }
  /deep/ button.btn-prev {
    background: transparent !important;
  }

  /deep/ button.btn-next {
    background: transparent !important;
  }

</style>

