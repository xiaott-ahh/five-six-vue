<template>
  <div class="movie-nav">
    <div class="type">
      <el-button round>科幻</el-button>
      <el-button round>悬疑</el-button>
    </div>
    <div class="type">
      <el-button round>爱情</el-button>
      <el-button round>喜剧</el-button>
    </div>
    <div class="type">
      <el-button round>恐怖</el-button>
      <el-button round>动作</el-button>
    </div>
    <div class="type">
      <el-button round>剧情</el-button>
      <el-button round>动画</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesNav"
}
</script>

<style scoped>

  div.type {
    margin: 20px;
  }
  .el-button {
    color: white;
    font-size: 25px;
    height: 120px;
    width: 120px;
    background-color: transparent !important;
  }

  .el-button:hover {
    background-color: rgba(58,145,186,0.7);
    border: transparent !important;
  }
</style>