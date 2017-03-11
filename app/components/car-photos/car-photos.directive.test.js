import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;
let $document;
let element;

describe('myApp.carPhotos.directive', () => {
    beforeEach(angular.mock.module('myApp.carPhotos'));
    beforeEach(inject((_$compile_, _$rootScope_, _$document_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $document = _$document_;
    }));
    beforeEach(() => {
        element = $compile('<fp-car-photos data-car="punto-176"></fp-car-photos>')($rootScope);
        $rootScope.$digest();
    });

    it('has `.car-photos` class', () => {
        assert(element.hasClass('car-photos'));
    });

    it('has an fullsize photo', () => {
        assert(element[0].querySelector('img.car-photos__fullsize-photo'));
    });

    it('has the invisible paranja', () => {
        assert(element[0].querySelector('.car-photos__paranja:not(.visible)'));
    });

    it('has a closer for the fullsize photo', () => {
        assert(element[0].querySelector('.car-photos__close-fullsize'));
    });

    it('has a list of small photos', () => {
        assert(element[0].querySelectorAll('img.car-photos__photo').length);
    });

    it('should show the paranja on click on a small photo', () => {
        element[0].querySelector('img.car-photos__photo').click();

        assert(element[0].querySelector('.car-photos__paranja.visible'));
    });

    it('should hide the paranja on click on the closer', () => {
        const scope = element.isolateScope();

        scope.vm.isFullsizePhotoVisible = true;
        element.isolateScope().$apply();

        scope.vm.onCloseFullsizeClick();

        assert(element[0].querySelector('.car-photos__paranja:not(.visible)'));
    });

    it('should hide the paranja on the ESC-keyup event', () => {
        element[0].querySelector('img.car-photos__photo').click();

        $document.triggerHandler({type: 'keyup', code: 'Escape'});

        assert(element[0].querySelector('.car-photos__paranja:not(.visible)'));
    });

    it('should ignore any other keyup events exept of ESC', () => {
        element[0].querySelector('img.car-photos__photo').click();

        $document.triggerHandler({type: 'keyup', code: 'Foo'});

        assert(element[0].querySelector('.car-photos__paranja.visible'));
    });
});
