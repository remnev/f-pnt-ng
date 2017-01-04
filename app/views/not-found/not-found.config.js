import tmpl from './not-found.pug';
import angular from 'angular';
import module from './not-found.module';

angular.module(module)
    .config(config);

function config ($routeProvider) {
    $routeProvider.otherwise({
        templateUrl: tmpl
    });
}

config.$inject = ['$routeProvider'];
