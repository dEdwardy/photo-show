import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import 'element-ui/lib/theme-chalk/index.css'
import { Upload, Dialog, Input  } from "element-ui";

Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.use(router);
Vue.use(Dialog);
Vue.use(Upload);
Vue.use(Input);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
