import assert from 'assert';
import angular from 'angular';
import '.';

let carTechSpecsService;
const slug = 'punto-176';

describe('myApp.carTechSpecs.service', () => {
    beforeEach(angular.mock.module('myApp.carTechSpecs'));
    beforeEach(inject((_CarTechSpecsService_) => {
        carTechSpecsService = new _CarTechSpecsService_(slug);
    }));

    it('has complectations data', () => {
        assert(carTechSpecsService.complectations);
    });

    it('complectations is Array', () => {
        assert(Array.isArray(carTechSpecsService.complectations));
    });
});
