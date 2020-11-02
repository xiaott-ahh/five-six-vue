<template>
  <div class="errorPage">
    <el-button type="success" @click="toHome">返回首页</el-button>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    toHome() {
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>
  .errorPage {
    background: url("../../assets/images/errorPage.gif") no-repeat center;
    background-size: cover;
    position: fixed;
    width: 100%;
    height: 100%;
  }

  .el-button {
    background-color:  rgb(1,191,165);
    border: none;
    position: fixed;
    right: 46%;
    bottom: 50px;
  }
</style>