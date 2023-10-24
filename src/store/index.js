import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: [], // 用于保存商品ID和数量的数组
    user: {
      name: 'John Doe',
      phone: '123-456-7890',
      address: '123 Main St, City'
    },
  },
  mutations: {
    // 添加商品到购物车
    addToCart(state, { productId, quantity }) {
      const existingItem = state.cartItems.find(item => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ productId, quantity });
      }
    },
    // 从购物车中移除商品
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.productId !== productId);
    },
    // 清空购物车
    clearCart(state) {
      state.cartItems = [];
    },
    // 修改用户信息
    updateUser(state, newUser) {
      state.user = newUser;
    },
  }
});
