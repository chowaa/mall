<template>
  <div class="user-profile">
    <h2>个人信息</h2>
    <el-card v-if="edit">
      <p>姓名: {{ user.name }}</p>
      <p>电话: {{ user.phone }}</p>
      <p>地址: {{ user.address }}</p>
      <el-button @click="edit = !edit">修改</el-button>
    </el-card>
    <el-form v-else :model="user" ref="userProfileForm" label-position="top">
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
      user: {},
      edit: true
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
          this.edit = !this.edit
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
