const Vue = require('vue');

const approuter = require('./components/approuter');

const appInit = () => {
    new Vue({
        router: approuter.router,
        render: (homepage) => homepage(require("./features/home.vue"))
    }).$mount('#app');
};

let vm = appInit();
