<template>
  <div class="product-detail">
    <h2>商品详情</h2>
    <div v-if="product">
      <h3>{{ product.name }}</h3>
      <p>品牌: {{ product.brand }}</p>
      <p>价格: ${{ product.price }}</p>
      <p>描述: {{ product.description }}</p>
    </div>
    <div v-else>
      <p>商品未找到</p>
    </div>
  </div>
</template>

<script>
import productsData from '@/assets/phones.json';

export default {
  data() {
    return {
      product: null
    };
  },
  created() {
    // 从路由参数中获取商品ID
    const productId = this.$route.params.id;

    // 根据商品ID从数据中查找商品信息
    this.product = productsData.find(product => product.id === parseInt(productId));

    if (!this.product) {
      // 处理商品未找到的情况，可以重定向到其他页面或显示错误消息
    }
  }
};
</script>

<style scoped>
.product-detail {
  max-width: 800px;
  margin: 0 auto;
}
</style>
