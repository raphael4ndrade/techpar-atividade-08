
const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/listar' },
    { path: '/listar', component: require("../features/listar.vue") },
    { path: '/salvar', component: require("../features/salvar.vue") }
  ]
});

// pra ganhar uma linha tava errado não hehehehe
exports.router = router;
