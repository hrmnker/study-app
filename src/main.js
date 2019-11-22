import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;



import Vconsole from 'vconsole'
const vConsole = new Vconsole()
Vue.use(vConsole)
// fastclick插件
import fastClick from 'fastclick'
fastClick.attach(document.body)
//bus总线机制
Vue.prototype.bus = new Vue()
// 封装请求引入
import request from './assets/request/request'
Vue.prototype.$request = request
// 引入Vuex
import store from './assets/store/store'
// 引入设置rem基准
import 'amfe-flexible'


import { NavBar } from 'vant';
Vue.use(NavBar);
import { Icon } from 'vant';
Vue.use(Icon);
import { Field } from 'vant';
Vue.use(Field);
import { Button } from 'vant';
Vue.use(Button);
import  {Popup} from 'vant';

Vue.use(Popup);
import { PullRefresh } from 'vant';
Vue.use(PullRefresh);

import { RadioGroup, Radio } from 'vant';
Vue.use(RadioGroup);
Vue.use(Radio);


//课程列表
import { List,Cell} from 'vant';
Vue.use(List);
Vue.use(Cell );

import { Toast } from 'vant';
Vue.use(Toast );

import { ActionSheet } from 'vant';
Vue.use(ActionSheet);

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')



