<template>
  <div class="phone-list">
    <el-input size="small" v-model="searchQuery" placeholder="按名称或品牌搜索"></el-input>
    <el-row :gutter="40">
      <el-col v-for="phone in filteredProducts" :key="phone.id" :span="6">
        <el-card>
          <div class="phone">
            <el-image class="phone-img" @click="toDetailsPage(phone.id)" :src="phone.imgUrl" fit="fill"></el-image>
            <div class="body">
              <h2>{{ phone.name }}</h2>
              <p>{{ phone.brand }}</p>
              <p>价格: ${{ phone.price }}</p>
              <el-button class="phone-btn" type="primary" @click="addToCart(phone.id, 1)">加入购物车</el-button>
            </div>
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
      searchQuery: '', // 搜索关键词
      phones: [] // 手机列表
    };
  },
  created() {
    this.loadPhones(); // 在组件创建时加载手机列表
  },
  computed: {
    filteredProducts() {
      const query = this.searchQuery.toLowerCase().trim(); // 获取搜索关键词并转为小写
      if (query === '') {
        return this.phones; // 如果搜索关键词为空，则返回所有手机列表
      }
      return this.phones.filter(product => {
        return (
            product.name.toLowerCase().includes(query) || // 根据名称搜索
            product.brand.toLowerCase().includes(query) // 根据品牌搜索
        );
      });
    }
  },
  methods: {
    loadPhones() {
      this.phones = [...phonesList] // 加载手机列表
    },
    addToCart(productId, quantity) {
      this.$store.commit('addToCart', { productId, quantity }); // 将商品添加到购物车
      this.$message.success('加入成功，可在购物车中查看'); // 显示加入成功的提示消息
    },
    toDetailsPage(id) {
      this.$router.push({ name: 'Detail', params: { id: id }}); // 跳转到详情页
    }
  }
};
</script>

<style scoped>
.phone-list {
  text-align: center;
}

.phone {
  height: 520px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .phone-img {
    border-radius: 20px;
    width: 300px;
    max-height: 400px;
    & :hover {
      cursor: pointer;
    }
  }
}
.el-card {
  margin: 20px 0;
  border-radius: 20px;
  box-shadow: 2px 4px 12px rgba(0,0,0,.08);
  background-color: #ffffff;
}
.el-row {
  margin: 10px 0;
}

.el-card {
  text-align: left;
}
</style>
