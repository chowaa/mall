import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

Vue.config.productionTip = false


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

const messages = ['success', 'warning', 'info', 'error'];
messages.forEach(type => {
  ElementUI.Message[type] = options => {
    if(typeof options === 'string') {
      options = {
          message: options
      };
      // 默认设置
      options.duration = 1000; // 默认值3000毫秒
      options.showClose = true; // 默认值false
      options.offset = 78; // 默认值20
    }
   options.type = type;
   return ElementUI.Message(options);
}
});
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
