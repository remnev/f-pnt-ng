import angular from 'angular';
import templateUrl from './car-menu.pug';

angular.module('myApp.carMenu')
    .directive('fpCarMenu', directive);

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
    element.addClass('car-menu');
}

class Controller {
    constructor(CarMenuService) {
        this._CarMenuService = CarMenuService;
    }

    $onInit() {
        const service = new this._CarMenuService(this.carSlug);

        this.image = service.image;
        this.modelsMenuItems = service.modelsMenuItems;
        this.divisionsMenuItems = service.divisionsMenuItems;
        this.currentModel = this.modelsMenuItems.filter((item) => item.slug === this.carSlug)[0];
    }
}

Controller.$inject = ['CarMenuService'];
