<template>
  <div class="shopping-cart">
    <el-card v-for="item in cartItems" :key="item.id" class="cart-item" v-if="item.quantity">
      <div class="cart-item-body" >
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
    <div class="item-price" v-if="priceTotal">
      <span>总价格：{{ priceTotal }}</span>
      <el-button type="primary" @click="order">立即下单</el-button>
    </div>
  </div>
</template>

<script>
import phonesList from '@/assets/phones.json'
export default {
  data() {
    return {
      cartItems: [], // 购物车商品列表
      priceTotal: 0
    }
  },
  created() {
    this.getProductById() // 在组件创建时获取商品信息
  },
  methods: {
    addToCart(productId, quantity) {
      this.$store.commit('addToCart', { productId, quantity }) // 将商品添加到购物车
      this.getProductById() // 更新购物车商品列表
    },
    removeItem(productId) {
      this.$store.commit('removeFromCart', productId); // 从购物车中移除商品
      this.getProductById() // 更新购物车商品列表
    },
    getProductById() {
      this.cartItems = [] // 清空购物车商品列表
      const cartIds = this.$store.state.cartItems // 获取购物车商品ID列表
      for (let cart of cartIds) {
        const item = phonesList.find(product => product.id === cart.productId) // 根据商品ID查找商品信息
        this.cartItems.push({...item, quantity: cart.quantity}) // 将商品信息添加到购物车商品列表
      }
      this.computedPriceT()
    },
    computedPriceT() {
      this.priceTotal = 0
      this.cartItems.map(item => {
        this.priceTotal += item.price * item.quantity
      })
    },
    order() {
      this.cartItems.map(item=> {
        this.removeItem(item.id) // 从购物车中移除商品
      })
      this.priceTotal = 0
      this.$message.success("下单成功！")
    }
  }
};
</script>

<style scoped>
.shopping-cart {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
        padding: 20px;
        text-align: center;
      }
      .cart-item-btn {
        width: 400px;
      }
    }
  }
  .item-price {
    width: 100%;
    padding: 20px 105px;
    text-align: end;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
