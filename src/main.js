import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import HeyUI from "heyui";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
require("heyui/themes/index.less")
Vue.use(HeyUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
