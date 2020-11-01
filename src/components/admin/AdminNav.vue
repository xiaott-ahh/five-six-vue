<template>
  <div class="nav" style="padding: 0;width: 200px;height: 100%">
    <el-menu
        :default-active="currentPath"
        router
        mode="vertical"
        class="el-menu-admin"
        background-color="#545c64"
        text-color="#fff"
        style="width: 200px;height: 100%"
        active-text-color="#3a91ba">
      <el-submenu  v-for="(item,i) in adminMenus" :key="i" :index="(i).toString()" style="text-align: left">
        <span slot="title" style="font-size: 17px;">
          <i :class="item.iconCls"></i>
          {{item.nameZh}}
        </span>
        <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">
          <i :class="child.icon"></i>
          {{ child.nameZh }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AdminNav",
  computed: {
    adminMenus() {
      return this.$store.state.adminMenus
    },
    currentPath() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
  .nav {
    display: flex;
    flex-direction: column;
  }


  .el-menu-admin {
    border-right: 0;
    height: 100%;
  }

  /deep/ .el-submenu__title {
    background-color: transparent !important;
  }

  .el-menu-item:hover {
    background-color: transparent !important;
  }
  .el-submenu:hover {
    background-color: transparent !important;
  }
</style>