<template>
  <el-container>
    <el-header style="margin-bottom: 30px">
      <p v-if="movies.length" style="font-size: 35px;color: #3377aa">搜索 {{keywords}} 的结果...</p>
      <p v-else style="font-size: 35px;color: #3377aa">暂无结果</p>
    </el-header>
    <el-container
      v-for="item in movies.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      :key="item.id"
      style="height: 300px"
    >
      <el-aside
          width="200px"
      >
        <img :src="item.cover" alt="cover" />
      </el-aside>
      <el-main style="padding-top: 0px">
        <div class="movieInformation">
          <p style="font-size: 25px">{{item.title}}({{item.date}})<span class="movie-rate-span">{{item.rate}}</span></p>
          <p>导演：{{item.director}}</p>
          <p>编剧：{{item.scriptwriter}}</p>
          <p>主演：{{item.actors}}</p>
          <p>国家/地区：{{item.district}}</p>
          <p>语言：{{item.language}}</p>
          <p>时长：{{item.duration}}分钟</p>
          <div class="categories">
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
        </div>
      </el-main>
    </el-container>
    <el-footer>
      <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="movies.length">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "SearchView",
  data(){
    return{
      keywords: '',
      currentPage : 1,
      pageSize : 10,
      movies : []
    }
  },
  methods: {
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage)
    },
  }
}
</script>

<style scoped>
  div.movieInformation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  img {
    width: 138px;
    height: 207px;
  }

  p {
    margin: 2px;
    font-size: 15px;
    color: white;
    text-align: justify; /*实现两端对齐*/
    text-justify: newspaper; /*通过增加或减少字或字母之间的空格对齐文本*/
    word-break: break-all; /*允许在单词内换行*/
  }

  span.movie-rate-span {
    font-style: italic;
    font-size: 25px;
    margin-left:10px;
    color: #f9ca05;
    display: inline-block
  }
  span {
    font-size: 15px;
    color: white;
  }

  /deep/ li.number.active{
    background: transparent !important;
  }

  /deep/ button.btn-prev {
    background: transparent !important;
  }

  /deep/ button.btn-next {
    background: transparent !important;
  }

</style>
