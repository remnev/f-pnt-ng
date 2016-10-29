import templateUrl from './history.pug';
import module from './history.module';
import angular from 'angular';

angular.module(module)
    .directive('fpHistory', directive);

function directive () {
    return {
        templateUrl: templateUrl,
        restrict: 'E',
        link: link,
        controller: Controller,
        controllerAs: 'vm'
    };
}

function link (scope, element) {
    element.addClass('history');
}

class Controller {
    constructor (fpHistoryService) {
        this.headerText = fpHistoryService.headerText;
        this.models = fpHistoryService.models;
    }
}

Controller.$inject = ['fpHistoryService'];
