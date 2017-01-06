import tmpl from './not-found.pug';
import angular from 'angular';

angular.module('myApp.views.notFound')
    .config(config);

function config($routeProvider) {
    $routeProvider.otherwise({
        templateUrl: tmpl,
    });
}

config.$inject = ['$routeProvider'];
