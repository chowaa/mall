<template>
  <div id="app">
    <nav>
      <router-link to="/products">商品列表</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/profile">个人信息</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  padding: 0 200px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>
