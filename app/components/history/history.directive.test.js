import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;
let element;

describe('myApp.history.directive', () => {
    beforeEach(angular.mock.module('myApp.history'));
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));
    beforeEach(() => {
        element = $compile('<fp-history></fp-history>')($rootScope);
        $rootScope.$digest();
    });

    it('has `.history` class', () => {
        assert(element.hasClass('history'));
    });

    it('has fp-title', () => {
        assert(element[0].querySelector('fp-title[data-level="1"]'));
    });

    it('has time-line', () => {
        assert(element[0].querySelector('.history__time-line'));
    });

    it('has number of models', () => {
        assert(element[0].querySelectorAll('.history__model').length);
    });
});
