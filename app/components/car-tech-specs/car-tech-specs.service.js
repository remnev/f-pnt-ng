import angular from 'angular';

angular.module('myApp.carTechSpecs')
    .factory('CarTechSpecsService', factory);

function factory() {
    return Service;
}

class Service {
    constructor(carSlug) {
        // todo: get from backend
        const data = require(`./car-tech-specs.data/${carSlug}`); // eslint-disable-line no-undef

        this.complectations = data;
    }
}
