angular.module('myApp.header', [])
    .directive('fpHeader', function() {
        return {
            templateUrl: '/components/header/header.html',
            restrict: 'E'
        };
    });
