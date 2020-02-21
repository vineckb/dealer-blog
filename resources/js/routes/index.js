import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'posts',
      component: () => import('../pages/Post/Index')
    },

    {
      path: '/posts/create',
      name: 'posts',
      component: () => import('../pages/Post/Form')
    },

    {
      path: '/posts/:id/edit',
      name: 'post-edit',
      component: () => import('../pages/Post/Form')
    },

    {
      path: '/posts/:slug',
      name: 'post',
      component: () => import('../pages/Post/Item')
    },

    {
      path: '/users',
      name: 'users',
      component: () => import('../pages/Users')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Auth/Login')
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/Auth/Register')
    },

    {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/Profile')
    },

    {
      path: '*',
      name: '404',
      component: () => import('../pages/404')
    }
  ]
});

export default router;