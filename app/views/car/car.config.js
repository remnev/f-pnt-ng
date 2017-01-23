import tmpl from './car.pug';
import angular from 'angular';

// todo: if requested an unknown car slug – redirect to 404
// eslint-disable-next-line no-unused-vars
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

function config($routeProvider) {
    $routeProvider
        .when('/cars/', {
            redirectTo: '/cars/punto/',
        })
        .when('/cars/:car/', {
            templateUrl: tmpl,
            controller: Controller,
            controllerAs: 'vm',
        });
}

class Controller {
    constructor($scope, headerService, $route) {
        const currentCar = $route.current.params.car;

        this.currentCar = currentCar;

        headerService
            .setBreadcrumbs([
                {path: '/cars/', title: 'Машины'},
                {path: `/cars/${currentCar}/`, title: currentCar},
            ])
            .toggleBreadcrumbs(true)
            .setActiveMenuItem('cars');

        $scope.$on('$destroy', () => {
            headerService.toggleBreadcrumbs(false);
        });
    }
}

config.$inject = ['$routeProvider'];
Controller.$inject = ['$scope', 'headerService', '$route'];
