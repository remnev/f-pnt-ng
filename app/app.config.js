import angular from 'angular';

angular.module('myApp')
    .config(config);

config.$inject = ['$locationProvider'];

function config($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
    });
}
