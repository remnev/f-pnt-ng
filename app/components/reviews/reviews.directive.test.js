import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;
let element;

describe('myApp.reviews.directive', () => {
    beforeEach(angular.mock.module('myApp.reviews'));
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));
    beforeEach(() => {
        element = $compile('<fp-reviews></fp-reviews>')($rootScope);
        $rootScope.$digest();
    });

    it('has `.reviews` class', () => {
        assert(element.hasClass('reviews'));
    });

    it('has particular number of reviews', () => {
        const length = 2;
        const element = $compile(`<fp-reviews data-limit=${length}></fp-reviews>`)($rootScope);

        $rootScope.$digest();

        assert.strictEqual(element[0].querySelectorAll('.reviews__review').length, length);
    });

    it('each review has particular nonempty elements', () => {
        Array.prototype.forEach.call(element[0].querySelectorAll('.reviews__review'), (reviewElem) => {
            assert(reviewElem.querySelector('.reviews__review-title').textContent.length);
            assert(reviewElem.querySelector('.reviews__review-total-vote').textContent.length);
            assert(reviewElem.querySelector('.reviews__review-posted-at').textContent.length);
            assert(reviewElem.querySelector('.reviews__review-author').textContent.length);
            assert(reviewElem.querySelector('.reviews__review-car-info').textContent.length);
            assert(reviewElem.querySelector('.reviews__review-text').textContent.length);
            assert(reviewElem.querySelector('a.reviews__review-show-more[ng-href]').textContent.length);
        });
    });
});
