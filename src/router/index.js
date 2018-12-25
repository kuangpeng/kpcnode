var router = [
    {
        name: 'home',
        path: '/',
        components: require('../views/Home.vue'),
        meta: {
            keepAlive: true,
            isBack: true
        }
    },
    {
        name: 'newsDetail',
        path: '/detail/:id',
        components: require('../views/Detail.vue')
    },
    {
        name: 'my',
        path: '/my',
        components: require('../views/My.vue'),
        meta: {
            requireAuth: true
        }
    },
    {
        name: 'login',
        path: '/login',
        components: require('../views/Login.vue')
    }
];

export default router;