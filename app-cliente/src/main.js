const Vue = require('vue');

const approuter = require('./components/approuter').router;

new Vue({
    router : approuter,
    render : function(createElement){
        return createElement(require('./features/listar.vue'));
    }
}).$mount('#app');