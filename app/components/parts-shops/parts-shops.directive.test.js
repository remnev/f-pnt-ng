import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;
let regionFilter;
let element;

describe('myApp.partsShops.directive', () => {
    beforeEach(angular.mock.module('myApp.partsShops'));
    beforeEach(inject((_$compile_, _$rootScope_, _fpRegionFilter_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        regionFilter = _fpRegionFilter_;
    }));
    beforeEach(() => {
        element = $compile('<fp-parts-shops></fp-parts-shops>')($rootScope);
        $rootScope.$digest();
    });

    it('has `.parts-shops` class', () => {
        assert(element.hasClass('parts-shops'));
    });

    it('has particular number of items', () => {
        const length = 2;
        const element = $compile(`<fp-parts-shops data-limit=${length}></fp-parts-shops>`)($rootScope);

        $rootScope.$digest();

        assert.strictEqual(element[0].querySelectorAll('.parts-shops__shop').length, length);
    });

    it('filters shops by a region', () => {
        const region = 'moscow';
        const element = $compile(`<fp-parts-shops data-region=${region}></fp-parts-shops>`)($rootScope);

        $rootScope.$digest();

        const $regions = element[0].querySelectorAll('.parts-shops__shop .parts-shops__shop-region');

        Array.prototype.forEach.call($regions, ($region) => {
            assert.strictEqual($region.textContent, regionFilter(region));
        });
    });

    it('each item has particular nonempty elements', () => {
        Array.prototype.forEach.call(element[0].querySelectorAll('.parts-shops__shop'), (item) => {
            assert(item.querySelector('a.parts-shops__shop-name[ng-href]').textContent.length);
            assert(item.querySelector('.parts-shops__shop-region').textContent.length);
            assert(item.querySelector('.parts-shops__shop-address').textContent.length);
            assert(item.querySelector('.parts-shops__shop-phone').textContent.length);
            assert(item.querySelector('a.parts-shops__shop-site[ng-href]').textContent.length);
            assert(item.querySelector('.parts-shops__shop-description').textContent.length);
        });
    });
});
