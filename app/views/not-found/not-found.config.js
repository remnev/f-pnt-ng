import tmpl from './not-found.pug';
import angular from 'angular';

angular.module('myApp.views.notFound')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('notFound', {
        templateUrl: tmpl,
    });

    $urlRouterProvider.otherwise(($injector, $location) => {
       const state = $injector.get('$state');

       state.go('notFound');

       return $location.path();
    });
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
