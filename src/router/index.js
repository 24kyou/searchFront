import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import postPage from "../views/postPage";
import getPage from "../views/getPage";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path:'/postPage',
      name: '上传图片',
      component: postPage
    },{
      path:'/postPage',
      name: '上传图片',
      component: getPage
    }],
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
