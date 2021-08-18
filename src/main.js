import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';

//引入momentjs
import moment from 'moment'
Vue.prototype.moment=moment;




//引入Vant
Vue.use(Vant);
//封装axios
Vue.prototype.axios = axios;
Vue.prototype.$axios = function({type,url,data,collback}){
  // console.log('执行了请求');
  if(type == "get"){
    axios.get(`${url}?${data}`).then(res=>{
      let obj = res.data.data;
      collback(obj);
    })
  }else if(type == "post"){
    axios.post(`${url}`,`${data}`).then(res=>{
      let obj = res.data;
      collback(obj);
    })
  }
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
