<template>
  <div>
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
