import templateUrl from './header.pug';
import module from './header.module';
import angular from 'angular';

angular.module(module)
    .directive('fpHeader', directive);

function directive () {
    return {
        templateUrl: templateUrl,
        restrict: 'E',
        link: link,
        controller: Controller,
        controllerAs: 'vm',
        scope: {}
    };
}

function link (scope, element) {
    element.addClass('header');
}

class Controller {
    constructor (headerService) {
        this.menuItems = headerService.menuItems;
        this.breadcrumbs = headerService.breadcrumbs;
    }
}

Controller.$inject = ['headerService'];
