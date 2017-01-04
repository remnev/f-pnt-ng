import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;
let headerService;
let element;

describe('myApp.header.directive', () => {
    beforeEach(angular.mock.module('myApp.header'));
    beforeEach(inject((_$compile_, _$rootScope_, _headerService_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        headerService = _headerService_;
    }));
    beforeEach(() => {
        element = $compile('<fp-header></fp-header>')($rootScope);
        $rootScope.$digest();
    });

    it('has `.header` class', () => {
        assert(element.hasClass('header'));
    });

    it('has logo', () => {
        assert(element[0].querySelectorAll('.header__logo').length);
    });

    it('has menu with number of items', () => {
        assert(element[0].querySelectorAll('.header__menu-item').length);
    });

    it('has breadcrumbs with number of items', () => {
        headerService.breadcrumbs.items = [{path: '/foo', title: 'bar'}];
        $rootScope.$digest();

        assert(element[0].querySelectorAll('.header__breadcrumps-item').length);
    });
});
