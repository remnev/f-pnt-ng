import templateUrl from './footer.pug';
import angular from 'angular';

angular.module('myApp.footer')
    .directive('fpFooter', directive);

function directive() {
    return {
        templateUrl: templateUrl,
        restrict: 'E',
        link: link,
        controller: Controller,
        controllerAs: 'vm',
        scope: {},
    };
}

function link(scope, element) {
    element.addClass('footer');
}

class Controller {
    constructor() {
        // todo: get from services
        this.models = [
            'punto-176',
            'punto-188',
            'punto-188-facelift',
            'grande-punto-199',
            'punto-evo',
            'punto',
        ];

        this.year = new Date().getFullYear();
    }
}
