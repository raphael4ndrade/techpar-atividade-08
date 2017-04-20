let Vue = require('vue');
let VueRouter = require('vue-router');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/listar' },
    { path: '/listar', component: require("../features/listar.vue") },
    { path: '/savar', component: require("../features/salvar.vue") }
  ]
});

module.exports = {
  router
};