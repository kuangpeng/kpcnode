import Vue from 'vue';
import Router from 'vue-router';

import * as PageList from './pages';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: PageList.Index
    },
    {
      path: '/detail/:id',
      name: 'ArticleDetail',
      component: PageList.ArticleDetail
    },
    {
      path: '/user',
      name: 'User',
      component: PageList.User
    },
    {
      path: '/search',
      name: 'Search',
      component: PageList.Search
    }
  ]
})
