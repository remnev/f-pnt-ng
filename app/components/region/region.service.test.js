import assert from 'assert';
import angular from 'angular';
import '.';

let regionService;

describe('myApp.region.service', () => {
    beforeEach(angular.mock.module('myApp.region'));
    beforeEach(inject((_regionService_) => {
        regionService = _regionService_;
    }));

    it('returns region name by its slug', () => {
        assert.strictEqual(regionService.getRegion('moscow'), 'г. Москва');
    });
});
