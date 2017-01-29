import tmpl from './car.pug';
import angular from 'angular';

const availaibleModels = [
    'punto-176',
    'punto-188',
    'punto-188-facelift',
    'grande-punto-199',
    'punto-evo',
    'punto',
];

angular.module('myApp.views.car')
    .config(config);

function config($stateProvider) {
    $stateProvider
        .state('car', {
            url: `/car/{car: (?:${availaibleModels.join('|')})}/`,
            templateUrl: tmpl,
            controller: Controller,
            controllerAs: 'vm',
        });
}

class Controller {
    constructor($scope, headerService, $stateParams) {
        const currentCar = $stateParams.car;

        this.currentCar = currentCar;

        headerService
            .setBreadcrumbs([
                {state: 'car({car: "punto"})', title: 'Машины'},
                {state: `car({car: ${currentCar}})`, title: currentCar},
            ])
            .toggleBreadcrumbs(true)
            .setActiveMenuItem('car');

        $scope.$on('$destroy', () => {
            headerService.toggleBreadcrumbs(false);
        });
    }
}

config.$inject = ['$stateProvider'];
Controller.$inject = ['$scope', 'headerService', '$stateParams'];
