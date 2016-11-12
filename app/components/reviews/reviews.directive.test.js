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
            assert(reviewElem.querySelector('.reviews__review-title').innerText.length);
            assert(reviewElem.querySelector('.reviews__review-total-vote').innerText.length);
            assert(reviewElem.querySelector('.reviews__review-posted-at').innerText.length);
            assert(reviewElem.querySelector('.reviews__review-author').innerText.length);
            assert(reviewElem.querySelector('.reviews__review-car-info').innerText.length);
            assert(reviewElem.querySelector('.reviews__review-text').innerText.length);
            assert(reviewElem.querySelector('a.reviews__review-show-more[ng-href]').innerText.length);
        });
    });
});
