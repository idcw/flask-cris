
const routes = [
    { path: '', component: Home },
    { path: '/1', component: Loading },
    { path: '/3', component: Events },
    { path: '/4', component: Analysis },
    { path: '/5', component: Settings },
    { path: '/6', component: Help }
]

const router = new VueRouter({
    routes
});

var App = new Vue({
    mixins: [

    ],
    store,
    router,
    methods: {

    }
});


App.$mount('#app');

