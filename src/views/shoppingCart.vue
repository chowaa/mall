<template>
  <div class="shopping-cart">
    <el-card v-for="item in cartItems" :key="item.id" class="cart-item">
      <div class="cart-item-body">
        <div class="cart-item-img">
          <el-image class="phone-img" :src="item.imgUrl"></el-image>
        </div>
        <div class="cart-item-content">
          <h1>{{ item.name }}</h1>
          <span>{{ item.description }}</span>
        </div>
        <div class="cart-item-btn">
          <el-button icon="el-icon-plus" @click="addToCart(item.id, 1)"></el-button>
          <span>{{ item.quantity }}</span>
          <el-button icon="el-icon-minus" @click="addToCart(item.id, -1)"></el-button>
          <el-button type="danger" @click="removeItem(item.id)">移除</el-button>
        </div>
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
  width: 100%;
  border-radius: 20px;
  box-shadow: 2px 4px 12px rgba(0,0,0,.08);
  margin: 10px;
  .cart-item-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .cart-item-img {
      width: 400px;
      .phone-img {
        height: 150px;
        border-radius: 20px;
      }
    }
    .cart-item-content {

    }
    .cart-item-btn {
      width: 400px;
    }
  }
}

.cart-item-content {
  padding: 20px;
  text-align: center;
}
</style>
