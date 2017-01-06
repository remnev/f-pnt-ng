import angular from 'angular';
import templateUrl from './car-services.pug';

angular.module('myApp.carServices')
    .directive('fpCarServices', directive);

function directive() {
    return {
        restrict: 'E',
        link: link,
        templateUrl: templateUrl,
        controller: Controller,
        controllerAs: 'vm',
        scope: {
            limit: '@',
            region: '@',
        },
        bindToController: true,
    };
}

function link(scope, element) {
    element.addClass('car-services');
}

class Controller {
    constructor(carServicesService) {
        this._carServicesService = carServicesService;
    }

    $onInit() {
        this.carServices = this._carServicesService.getCarServices(this.limit, this.region);
    }
}

Controller.$inject = ['carServicesService'];
