import tmpl from './main-page.pug';
import angular from 'angular';

angular.module('myApp.views.mainPage')
    .config(config);

config.$inject = ['$routeProvider'];

function config ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: tmpl
    });
}
