import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index"
import Register from "../views/Register";
import Login from "../views/Login";
const NotFound = () => import("../views/NotFound")
import Home from "../views/Home";
import InfoShow from "../views/InfoShow";
import FoundList from "../views/FoundList";
// import NotFound from "../views/NotFound";
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        { path: '', component: Home },
        { path: '/home', name: 'home', component: Home },
        { path: '/infoshow', name: 'infoshow', component: InfoShow },
        { path: '/foundlist', name: 'foundlist', component: FoundList }
      ]
    },
    {
      path:"/register",
      name:"register",
      component:Register
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"*",
      name:"/404",
      component:NotFound
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.eleToken;
  if (to.path === "/login" || to.path === "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
})

export default router
