<template>
  <div class="home">
    <login/>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/views/login/login.vue'

export default {
  name: 'HomeView',
  components: {
    login
  }
}
</script>
