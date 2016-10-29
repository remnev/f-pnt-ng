import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;
let $location;
let element;
let fpHistoryService;

describe('myApp.history.directive', () => {
    beforeEach(angular.mock.module('myApp.history'));
    beforeEach(inject((_$compile_, _$rootScope_, _$location_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $location = _$location_;
    }));
    beforeEach(() => {
        element = $compile('<fp-history></fp-history>')($rootScope);
        $rootScope.$digest();
    });

    it('has `.history` class', () => {
        assert(element.hasClass('history'));
    });

    it('has header', () => {
        assert(element[0].querySelectorAll('.history__header').length);
    });

    it('has time-line', () => {
        assert(element[0].querySelectorAll('.history__time-line').length);
    });

    it('has number of models', () => {
        assert(element[0].querySelectorAll('.history__model').length);
    });
});
