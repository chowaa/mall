<template>
  <div class="phone-list">
    <h1>手机商品列表</h1>
    <el-input v-model="searchQuery" placeholder="按名称或品牌搜索"></el-input>
    <el-row>
      <el-col v-for="phone in filteredProducts" :key="phone.id" :span="8">
        <el-card>
          <div class="phone">
            <h2>{{ phone.name }}</h2>
            <p>{{ phone.brand }}</p>
            <p>价格: ${{ phone.price }}</p>
            <p>{{ phone.description }}</p>
            <el-button @click="addToCart(phone.id, 1)">加入购物车</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import phonesList from '@/assets/phones.json'
export default {
  data() {
    return {
      searchQuery: '',
      phones: []
    };
  },
  created() {
    this.loadPhones();
  },
  computed: {
    filteredProducts() {
      const query = this.searchQuery.toLowerCase().trim();
      if (query === '') {
        return this.phones;
      }
      return this.phones.filter(product => {
        return (
            product.name.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query)
        );
      });
    }
  },
  methods: {
    loadPhones() {
      this.phones = [...phonesList]
    },
    addToCart(productId, quantity) {
      this.$store.commit('addToCart', { productId, quantity });
    }
  }
};
</script>

<style scoped>
.phone-list {
  text-align: center;
}

.phone {
  text-align: center;
}

.el-row {
  margin: 10px 0;
}

.el-card {
  text-align: left;
}
</style>
