import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;
let element;

describe('myApp.footer.directive', () => {
    beforeEach(angular.mock.module('myApp.footer'));
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));
    beforeEach(() => {
        element = $compile('<fp-footer></fp-footer>')($rootScope);
        $rootScope.$digest();
    });

    it('has `.footer` class', () => {
        assert(element.hasClass('footer'));
    });

    it('has number of sections', () => {
        assert(element[0].querySelectorAll('.footer__section').length);
    });

    it('has the copyright', () => {
        assert(element[0].querySelector('.footer__copyright'));
    });
});
