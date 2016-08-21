import tmpl from './main-page.pug';

import angular from 'angular';

angular.module('myApp.views.mainPage', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: tmpl
        });
    }]);
