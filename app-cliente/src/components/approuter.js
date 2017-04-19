let Vue = require('vue');
let VueRouter = require('vue-router');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/listar' },
    { path: '/list', component: require('../features/listar.vue') },
    { path: '/save', component: '../features/salvar.vue' }
  ]
});

module.exports = {
  route
};