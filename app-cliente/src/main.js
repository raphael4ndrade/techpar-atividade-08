let angular = require("angular");

require('angular-route')

let app = angular.module("webapp", ['ngRoute']);

require('./controllers');
require('./services');

app.config(($routeProvider) => {
    $routeProvider.when("/list", {
        controller : "toListController",
        templateUrl : "templates/list.html",
        controllerAs: "ctrl"
    })
    .when("/save", {
        controller : "toSaveController",
        templateUrl: "templates/save.html",
        controllerAs : "ctrl"
    })
    .otherwise('/save');
});