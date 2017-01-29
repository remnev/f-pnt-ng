import tmpl from './main-page.pug';
import angular from 'angular';

angular.module('myApp.views.mainPage')
    .config(config);

function config($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
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

Controller.$inject = ['headerService'];
config.$inject = ['$stateProvider'];
