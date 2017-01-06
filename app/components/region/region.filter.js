import angular from 'angular';

angular.module('myApp.region')
    .filter('fpRegion', filter);

function filter(regionService) {
    return (input) => regionService.getRegion(input);
}

filter.$inject = ['regionService'];
