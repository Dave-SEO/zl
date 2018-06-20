// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/zTreeStyle/zTreeStyle.css'
import '@/assets/css/zTreeStyle.css'
import '@/assets/js/jquery-1.4.4.min.js'
import '@/assets/js/jquery.ztree.core.min.js'
import '@/assets/js/jquery.ztree.excheck.min.js'
import '@/assets/js/jquery.ztree.exedit.min.js'

Vue.config.productionTip = false
Vue.use(ElementUI)

axios.defaults.baseURL = document.querySelector('meta[name="server-name"]').getAttribute('content')// 设置axios的默认访问地址
Vue.prototype.$http = axios// 全局注册$http属性，在子组件中可以通过this.$http来进行axios通信
Vue.prototype.$token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')// 全局注册$token，在组件可以使用this.$token获取token值
Vue.prototype.$global = {
  userName: null
}
// router.beforeEach((to, from, next) => {
//   if (!Vue.prototype.$global.user) {
//     if (to.path === '/') {
//       checkLogin(next, null, '/MeetingList')
//     } else {
//       checkLogin(next, '/', null)
//     }
//   } else {
//     if (to.path === '/') {
//       checkLogin(next, null, '/MeetingList')
//     } else {
//       next()
//     }
//   }
// })
// function checkLogin (next, failPath, successPath) {
//   var postData = {}
//   postData['_token'] = Vue.prototype.$token
//   Vue.prototype.$http({
//     method: 'get',
//     url: '/superAdmin/checkLogin',
//     data: postData
//   }).then(function (res) {
//     console.log(res)
//     var result = res.data
//     switch (result.code) {
//       case 401:
//         // 鉴权失败，停留在登录
//         if (failPath) {
//           next(failPath)
//         } else {
//           next()
//         }
//         break
//       case 200:
//         // 鉴权成功，直接跳转到首页
//         Vue.prototype.$global.user = result.data
//         if (successPath) {
//           next(successPath)
//         } else {
//           next()
//         }
//         break
//       default:
//         Vue.prototype.$message.error(result.message ? result.message : '发生异常')
//         break
//     }
//   }).catch(function (err) {
//     console.log(err)
//     switch (err.response.status) {
//       case 419:
//         // tokens失效
//         window.location.reload()
//         break
//       default:
//         Vue.prototype.$message.error('发生异常')
//         break
//     }
//   })
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
