const Vue = require('vue');

const appcore = require('./components/approuter');

const appInit = () => new Vue({
    router : appcore.router
}).$mount('#app');