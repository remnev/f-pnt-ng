import angular from 'angular';

angular.module('myApp.car').factory('carService', factory);

function factory() {
    return new Service();
}

class Service {
    constructor() {
        this.cars = {
            'punto-176': 'Punto 1',
            'punto-188': 'Punto 2',
            'punto-188-facelift': 'Punto 2 Facelift',
            'grande-punto-199': 'Grande Punto',
            'punto-evo': 'Punto Evo',
            'punto': 'Punto',
        };
    }

    getCarTitle(slug) {
        return this.cars[slug];
    }
}
