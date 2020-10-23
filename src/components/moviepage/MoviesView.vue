<template>
  <div>
    <el-row style="height: 840px;">
      <search-bar @onSearch="searchResult"></search-bar>
      <el-tooltip effect="dark" placement="right"
                  v-for="item in movies.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                  :key="item.id">
        <h1 slot="content" style="font-size: 24px;margin-bottom: 6px;">{{item.title}}({{item.date}})</h1>
        <div slot="content">
          <star-rate
              :value=item.rate
              :disabled="true"
              type="star1"/>
          <span class="rate-text" style="color: #3a91ba;font-size: 20px">{{item.rate}}</span>
        </div>
        <h3 slot="content">导演：{{item.director}}</h3>
        <h3 slot="content">主演：{{item.actors}}</h3>
        <h3 slot="content">语言：{{item.language}}</h3>
        <h3 slot="content">国家：{{item.nation}}</h3>
        <h3 slot="content">类型：{{item.category.type}}</h3>

        <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
        <el-card style="background-color:transparent;border:none;width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="movie"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover" @click="editMovie(item)">
            <img :src="item.cover" alt="海报">
          </div>
          <div class="info">
            <div class="title" style="padding-left: 15px">
              <a href="">{{item.title}}</a>
              <i class="el-icon-delete" @click="deleteMovie(item.id)"></i>
            </div>
          </div>
        </el-card>
      </el-tooltip>
      <edit-information @onSubmit="loadMovies()" ref="edit"></edit-information>
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
import StarRate from 'vue-cute-rate'
import SearchBar from "@/components/moviepage/SearchBar";
import EditInformation from "@/components/moviepage/EditInformation";
export default {
  name: 'MoviesView',
  components: {StarRate,SearchBar,EditInformation},
  data () {
    return {
      currentPage:1,
      pageSize:17,
      movies: []
    }
  },
  mounted: function () {
    this.loadMovies()
    console.log(this.movies)
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
    searchResult () {
      const _this = this;
      this.$axios
          .get('/search?keywords=' + this.$refs.searchBar.keywords, {
          }).then(resp => {
        if (resp && resp.status === 200) {
          _this.movies = resp.data
        }
      })
    },
    deleteMovie (id) {
      this.$confirm('此操作将永久删除该电影信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
            this.$axios
                .post('/delete', {id: id}).then(resp => {
              if (resp && resp.status === 200) {
                this.loadMovies()
              }
            })
          }
      ).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
      // alert(id)
    },
    editMovie (item) {
      this.$refs.edit.dialogFormVisible = true
      this.$refs.edit.form = {
        id: item.id,
        cover: item.cover,
        title: item.title,
        director: item.director,
        actors: item.actors,
        language: item.language,
        nation: item.nation,
        rate: item.rate,
        date: item.date,
        abs: item.abs,
        category: {
          id: item.category.id,
          type: item.category.type
        }
      }
    }
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
    text-align: left;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }
</style>

