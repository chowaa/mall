<template>
  <div class="shopping-cart">
    <el-card v-for="item in cartItems" :key="item.id" class="cart-item">
      <div class="cart-item-content">
        <h3>{{ item.name }}</h3>
        <el-button type="danger" @click="addToCart(item.id, 1)">+</el-button>
        <span>{{ item.quantity }}</span>
        <el-button type="danger" @click="addToCart(item.id, -1)">-</el-button>
        <el-button type="danger" @click="removeItem(item.id)">移除</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import phonesList from '@/assets/phones.json'
export default {
  data() {
    return {
      cartItems: []
    }
  },
  created() {
    this.getProductById()
  },
  methods: {
    addToCart(productId, quantity) {
      this.$store.commit('addToCart', { productId, quantity })
      this.getProductById()
    },
    removeItem(productId) {
      this.$store.commit('removeFromCart', productId);
      this.getProductById()
    },
    getProductById() {
      this.cartItems = []
      const cartIds = this.$store.state.cartItems
      for (let cart of cartIds) {
        const item = phonesList.find(product => product.id === cart.productId)
        this.cartItems.push({...item, quantity: cart.quantity})
      }
    }
  }
};
</script>

<style scoped>
.shopping-cart {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cart-item {
  width: 300px;
  margin: 10px;
}

.cart-item-content {
  padding: 20px;
  text-align: center;
}
</style>
