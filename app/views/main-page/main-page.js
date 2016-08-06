angular.module('myApp.views.mainPage', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: '/views/main-page/main-page.html',
          controller: 'mainPageController'
        });
    }])
    .controller('mainPageController', [function() {}]);
