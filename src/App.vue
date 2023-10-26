<template>
  <div id="app">
    <router-view/>
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
