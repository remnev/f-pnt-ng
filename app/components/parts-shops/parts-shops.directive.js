import angular from 'angular';
import module from './parts-shops.module';
import templateUrl from './parts-shops.pug';

angular.module(module)
    .directive('fpPartsShops', directive);

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
    element.addClass('parts-shops');
}

class Controller {
    constructor (partsShopsService) {
        this._partsShopsService = partsShopsService;
    }

    $onInit () {
        this.partsShops = this._partsShopsService.getPartsShops(this.limit, this.region);
    }
}

Controller.$inject = ['partsShopsService'];
