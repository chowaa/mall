<template>
    <div>
      <nav class="nav">
        <el-row :gutter="10">
          <el-col :span="6">
            <router-link to="/products">商品列表</router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/cart">购物车</router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/profile">个人信息</router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/loginRegister">登录/注册</router-link>
          </el-col>
        </el-row>
      </nav>
      <div class="content">
        <router-view/>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.about {
    padding: 0 200px;
}
</style>
