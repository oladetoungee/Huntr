import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store/index'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Register from '../views/Register'
import Dashboard from '../views/Dashboard'


import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
    // beforeEnter(to, from, next) {
    //   if (Store.state.user.loggedIn === true) {
    //     next()
    //   } else {
    //     next("/")
    //   }
    // }
  },
  {
    path: '*',
    redirect: '/'
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router
