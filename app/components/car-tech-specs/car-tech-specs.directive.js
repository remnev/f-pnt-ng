import angular from 'angular';
import templateUrl from './car-tech-specs.pug';

angular.module('myApp.carTechSpecs')
    .directive('fpCarTechSpecs', directive);

function directive() {
    return {
        restrict: 'E',
        link: link,
        templateUrl: templateUrl,
        controller: Controller,
        controllerAs: 'vm',
        scope: {
            carSlug: '@car',
        },
        bindToController: true,
    };
}

function link(scope, element) {
    element.addClass('car-tech-specs');
}

class Controller {
    constructor(CarTechSpecsService) {
        this._CarTechSpecsService = CarTechSpecsService;
    }

    $onInit() {
        const service = new this._CarTechSpecsService(this.carSlug);

        this.complectations = service.complectations;
    }
}

Controller.$inject = ['CarTechSpecsService'];
