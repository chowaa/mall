<template>
  <div class="loginRegister">
    <login v-if="type"></login>
    <register v-else></register>
    <el-button v-if="type" @click="type = !type">没有账户？立即注册</el-button>
    <el-button v-else @click="type = !type">已有账户？立即登录</el-button>
  </div>
</template>

<script>
import login from './login.vue'
import register from './register.vue'
export default {
  name: 'loginRegister',
  components: {
    login,
    register
  },
  data() {
    return {
      type: true
    }
  }
}
</script>

<style scoped>
.loginRegister {
  padding-top: 200px;
}
</style>
