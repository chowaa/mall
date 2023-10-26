<template>
  <div class="product-detail">
    <el-card>
      <h2 slot="header">商品详情</h2>
      <div class="cart-item" v-if="product">
        <div class="cart-item-img">
          <el-image class="phone-img" :src="product.imgUrl"></el-image>
        </div>
        <div class="cart-item-content">
          <h1>{{ product.name }}</h1>
          <p>{{ product.brand }}</p>
          <p>${{ product.price }}</p>
          <p>{{ product.description }}</p>
          <p>{{ product.disposition }}</p>
        </div>
      </div>
      <div v-else>
        <p>商品未找到</p>
      </div>
    </el-card>
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
    const productId = this.$route.params.id;
    this.product = productsData.find(product => product.id === parseInt(productId));
  }
};
</script>

<style scoped>
.product-detail {
  max-width: 1200px;
  margin: 0 auto;
  .cart-item {
    display: flex;
    justify-content: space-around;
  }
  .cart-item-img {
    .phone-img {
      height: 500px;
      border-radius: 20px;
    }
  }
  .cart-item-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>
