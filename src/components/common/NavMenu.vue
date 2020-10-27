<template>
  <div class="nav" style="padding: 0;">
    <div class="nav-logo" style="width: 20%;">
      <a class="logo" href="/">
        <img src="../../assets/images/logo.png" alt=""/>
      </a>
    </div>
    <div class="nav-left" style="width: 30%;padding-right: 30px">
      <el-menu
          theme="dark"
          mode="horizontal"
          router
          @select="handleSelect"
          background-color=transparent
          text-color=white
          active-text-color=white>
        <el-menu-item index="/movieset">电影集</el-menu-item>
        <el-menu-item index="/recommand">向我推荐</el-menu-item>
        <el-menu-item index="/news">影讯</el-menu-item>
      </el-menu>
    </div>
    <div class="nav-search" style="width: 35%;padding-top: 15px;margin-left: 30px">
      <el-input
          @keyup.enter.native="searchClick"
          placeholder="输入电影、导演、演员名称..."
          prefix-icon="el-icon-search"
          size="small"
          style="width: 70%;margin-right: 10px"
          v-model="keywords">
      </el-input>
      <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick">搜索</el-button>
    </div>
    <div class="nav-sep" style="width: 1%;">
      <h3 style="color: white">|</h3>
    </div>
    <div v-if="!$store.state.user.name" class="nav-right" style="width: 15%">
      <el-menu
          theme="dark"
          class="nav-right"
          router
          mode="horizontal"
          background-color=transparent
          text-color=white
          active-text-color=white>
        <el-menu-item index="/register">注册</el-menu-item>
        <el-menu-item index="/login">登录</el-menu-item>
      </el-menu>
    </div>
    <div v-else class="user-profile" style="width: 15%">
      <el-menu
          theme="dark"
          class="nav-userProfile"
          mode="horizontal"
          background-color=transparent
          text-color=white
          active-text-color=white
          style="margin-left: 40px"
      >
        <el-submenu
            index="user-profile"
        >
          <template slot="title">
            <span>{{$store.state.user.username}}</span>
            <img src="../../assets/ico/wechat.png" alt="" />
          </template>
          <el-menu-item index="profile-1">我的收藏</el-menu-item>
          <el-menu-item index="profile-2">管理文章</el-menu-item>
          <el-menu-item index="profile-3">我的关注</el-menu-item>
          <el-button>退出</el-button>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import '../../assets/my-ele-css/my-input.css'
export default {
  name: 'NavMenu',
  data() {
    return {
      keywords: '',
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(index) {
      if (this.$store.state.user.name) {
        if (index === '/recommand') {
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
    },
    searchClick() {
      this.$emit("showSearchResult")
    }
  },
}
</script>

<style scoped>

      /deep/ ul.el-menu--popup-bottom-start{
        background-color: rgba(2, 10, 14, 1) !important;
      }

      .nav {
      width:100%;
      height: 60px;
      display: flex;
      display: -webkit-flex;
      /* 从左端开始沿水平轴防止flex item */
      flex-direction: row;
      /* 强制 flex item不换行，沿着同一行堆叠 */
      flex-wrap: nowrap;
      /* flex item在主轴上的对齐方式，这里定义左对齐 */
      justify-content: flex-start;
      /* 定义交叉轴对其方式 */
      align-items: flex-start
    }
    .el-menu {
      border: none !important;
    }

    .el-submenu {
      border-bottom: none;
    }

    .el-menu-item:hover {
      background-color: #3a91ba !important;
    }
    .el-submenu:hover {
      background-color: #3a91ba !important;
    }
    /deep/ .el-submenu__title {
      background-color: transparent !important;
    }
    .el-menu-item {
      border-bottom: none !important;
      background-color: transparent !important;
    }
    .logo img{
      background:no-repeat;
    }

    .nav-search {
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
    }
</style>

