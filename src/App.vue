<template>
  <div id="app">
    <nav class="nav">
      <el-row :gutter="10">
         <el-col :span="8">
           <router-link to="/products">商品列表</router-link>
         </el-col>
        <el-col :span="8">
          <router-link to="/cart">购物车</router-link>
        </el-col>
        <el-col :span="8">
          <router-link to="/profile">个人信息</router-link>
        </el-col>
      </el-row>
    </nav>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
html, body {
  background-color: #f5f5f7;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 200px;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #8d8c8c;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #000000;
}
</style>
<script setup>
</script>
