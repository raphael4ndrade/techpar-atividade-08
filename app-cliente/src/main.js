
const Vue = require('vue');

new Vue({
    el: "#app",
    router: require('./components/approuter').router,
    render: (r) => r(require("./features/home.vue"))
});

// como o package.json não aceita comentários,
// posto que temos a seção browserify nele, não precisamos indicar 
// os transforms a aplicar. o browserify pegará de lá