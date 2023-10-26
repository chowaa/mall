import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI);

let existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
if (!existingAccounts.some(item => item.username === 'admin')) {
  existingAccounts.push(
    {
      username: 'admin',
      password: '123123Zz'
    }
  )

  localStorage.setItem('accounts', JSON.stringify(existingAccounts));
}

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
