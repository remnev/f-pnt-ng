import mainPageModule from './views/main-page/main-page';
import header from './components/header/header';

angular.module('myApp', ['myApp.views.mainPage', 'myApp.header'])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }]);
