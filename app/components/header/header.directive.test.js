import assert from 'assert';
import angular from 'angular';

import './header.directive';

let $compile;
let $rootScope;
let $location;
let element;

beforeEach(angular.mock.module('myApp.header'));
beforeEach(inject((_$compile_, _$rootScope_, _$location_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $location = _$location_;
}));
beforeEach(() => {
    element = $compile('<fp-header></fp-header>')($rootScope);
    $rootScope.$digest();
});

describe('myApp.header.directive', () => {
    it('has `.header` class', () => {
        assert(element.hasClass('header'));
    });

    it('has logo', () => {
        assert(element[0].querySelectorAll('.header__logo').length);
    });

    it('has menu with number of items', () => {
        assert(element[0].querySelectorAll('.header__menu-item').length);
    });

    it('has particular active menu item', () => {
        ['/', '/cars/'].forEach((path) => {
            $location.path(path);
            $rootScope.$apply();

            assert.equal(element[0].querySelector('.active').getAttribute('href'), path);
        });
    });
});
