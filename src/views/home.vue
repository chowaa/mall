<template>
  <div class="about">
    <div class="navbar">
      <router-link to="/products">商品列表</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/profile">个人信息</router-link>
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
import list from '@/views/merchandise/list.vue'
export default {
  components: {
    list
  },
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style scoped>
.about {
  padding: 0 200px;
}
</style>
