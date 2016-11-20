import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;
let regionFilter;
let element;

describe('myApp.carServices.directive', () => {
    beforeEach(angular.mock.module('myApp.carServices'));
    beforeEach(inject((_$compile_, _$rootScope_, _fpRegionFilter_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        regionFilter = _fpRegionFilter_;
    }));
    beforeEach(() => {
        element = $compile('<fp-car-services></fp-car-services>')($rootScope);
        $rootScope.$digest();
    });

    it('has `.car-services` class', () => {
        assert(element.hasClass('car-services'));
    });

    it('has particular number of items', () => {
        const length = 2;
        const element = $compile(`<fp-car-services data-limit=${length}></fp-car-services>`)($rootScope);

        $rootScope.$digest();

        assert.strictEqual(element[0].querySelectorAll('.car-services__service').length, length);
    });

    it('filters services by a region', () => {
        const region = 'moscow';
        const element = $compile(`<fp-car-services data-region=${region}></fp-car-services>`)($rootScope);

        $rootScope.$digest();

        const $regions = element[0].querySelectorAll('.car-services__service .car-services__service-region');

        Array.prototype.forEach.call($regions, ($region) => {
            assert.strictEqual($region.textContent, regionFilter(region));
        });
    });

    it('each item has particular nonempty elements', () => {
        Array.prototype.forEach.call(element[0].querySelectorAll('.car-services__service'), (item) => {
            assert(item.querySelector('a.car-services__service-name[ng-href]').textContent.length);
            assert(item.querySelector('.car-services__service-region').textContent.length);
            assert(item.querySelector('.car-services__service-address').textContent.length);
            assert(item.querySelector('.car-services__service-phone').textContent.length);
            assert(item.querySelector('.car-services__service-description').textContent.length);
        });
    });
});
