import mainPageModule from './views/main-page';
import header from './components/header';

const angular = require('angular');

angular.module('myApp', ['myApp.views.mainPage', 'myApp.header'])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }]);
