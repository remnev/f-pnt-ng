angular.module('myApp', ['myApp.views.mainPage'])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }]);
