import assert from 'assert';
import angular from 'angular';
import '.';

let carService;

describe('myApp.car.service', () => {
    beforeEach(angular.mock.module('myApp.car'));
    beforeEach(inject((_carService_) => {
        carService = _carService_;
    }));

    it('has the unempty cars dict', () => {
        assert(Object.keys(carService.cars).length);
    });

    it('returns a car title by its slug', () => {
        assert.strictEqual(carService.getCarTitle('punto-176'), 'Punto 1');
    });
});
