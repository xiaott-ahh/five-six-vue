<template>
  <el-container id="admin-body">
    <el-header style="height: 58px;padding: 0">
      <admin-header></admin-header>
    </el-header>
    <!--<el-row style="height: 100%;">-->
    <el-container>
      <el-aside style="height: 100%;width: 200px">
        <admin-nav></admin-nav>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AdminNav from "@/components/admin/AdminNav";
import AdminHeader from "@/components/admin/AdminHeader";
export default {
  name: "AdminIndex",
  components: {AdminHeader, AdminNav}
}
</script>

<style scoped>
  #admin-body{
    height: 100vh;
    background-color: #f1eded;
  }
</style>