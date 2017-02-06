import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;
let element;

describe('myApp.carTechSpecs.directive', () => {
    beforeEach(angular.mock.module('myApp.carTechSpecs'));
    beforeEach(() => {
        angular.mock.module(($provide) => {
            $provide.factory('CarTechSpecsService', () => class {
                constructor(carSlug) {
                    this.complectations = [];
                }
            });
        });
    });
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));
    beforeEach(() => {
        element = $compile('<fp-car-tech-specs data-car="shpunto"></fp-car-tech-specs>')($rootScope);
        $rootScope.$digest();
    });

    it('has `.car-tech-specs` class', () => {
        assert(element.hasClass('car-tech-specs'));
    });

    it('has table', () => {
        assert(element[0].querySelector('table'));
    });
});
