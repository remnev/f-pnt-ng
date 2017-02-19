import assert from 'assert';
import angular from 'angular';
import '.';

describe('myApp.car.filter', () => {
    it('replaces a car slug with an appropriate name', () => {
        let $filter;

        angular.mock.module('myApp.car');
        inject((_$filter_) => {
            $filter = _$filter_;
        });

        assert.strictEqual($filter('fpCar')('punto-evo'), 'Punto Evo');
    });
});
