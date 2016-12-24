import templateUrl from './footer.pug';
import module from './footer.module';
import angular from 'angular';

angular.module(module)
    .directive('fpFooter', directive);

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
    element.addClass('footer');
}

class Controller {
    constructor () {
        // todo: get from services
        this.models = [
            {
                slug: 'punto-176',
                title: 'Punto 1 (176)'
            },
            {
                slug: 'punto-188',
                title: 'Punto 2 (188)'
            },
            {
                slug: 'punto-188-facelift',
                title: 'Punto 2 Facelift'
            },
            {
                slug: 'grande-punto-199',
                title: 'Grande Punto (199)'
            },
            {
                slug: 'punto-evo',
                title: 'Punto Evo'
            },
            {
                slug: 'punto',
                title: 'Punto'
            }
        ];

        this.year = new Date().getFullYear();
    }
}
