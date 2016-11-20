import angular from 'angular';
import module from './car-services.module';
import templateUrl from './car-services.pug';

angular.module(module)
    .directive('fpCarServices', directive);

function directive () {
    return {
        restrict: 'E',
        link: link,
        templateUrl: templateUrl,
        controller: Controller,
        controllerAs: 'vm',
        scope: {
            limit: '@',
            region: '@'
        },
        bindToController: true
    };
}

function link (scope, element) {
    element.addClass('car-services');
}

class Controller {
    constructor (carServicesService) {
        this.carServices = carServicesService.getCarServices(this.limit, this.region);
    }
}

Controller.$inject = ['carServicesService'];
