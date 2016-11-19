import assert from 'assert';
import angular from 'angular';
import '.';

let regionFilter;

describe('myApp.region.filter', () => {
    beforeEach(angular.mock.module('myApp.region'));
    beforeEach(inject((_fpRegionFilter_) => {
        regionFilter = _fpRegionFilter_;
    }));

    it('replaces a region slug with appropriate name', () => {
        assert.strictEqual(regionFilter('moscow'), 'г. Москва');
    });
});
