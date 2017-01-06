import tmpl from './main-page.pug';
import angular from 'angular';

angular.module('myApp.views.mainPage')
    .config(config);

function config($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: tmpl,
        controller: Controller,
        controllerAs: 'vm',
    });
}

class Controller {
    constructor(headerService) {
        headerService.setActiveMenuItem('main');
    }
}

config.$inject = ['$routeProvider'];
Controller.$inject = ['headerService'];
