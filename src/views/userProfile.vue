<template>
  <div class="user-profile">
    <h2>个人信息</h2>
    <el-form :model="user" ref="userProfileForm" label-position="top">
      <el-form-item label="姓名">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="user.phone"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="user.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveChanges">保存更改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.user = {...this.$store.state.user}
  },
  methods: {
    saveChanges() {
      // element-ui中表单验证方法
      this.$refs.userProfileForm.validate(valid => {
        if (valid) {
          this.$store.commit('updateUser', this.user);
          this.$message.success('更改已保存')
        } else {
          this.$message.error('请填写完整的信息');
        }
      });
    }
  }
};
</script>

<style scoped>
.user-profile {
  max-width: 400px;
  margin: 0 auto;
}
</style>
