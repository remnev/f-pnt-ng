import angular from 'angular';

angular.module('myApp.car').filter('fpCar', filter);

function filter(carService) {
    return (input) => carService.getCarTitle(input);
}

filter.$inject = ['carService'];
