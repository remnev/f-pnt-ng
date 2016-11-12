import assert from 'assert';
import angular from 'angular';
import '.';

let ReviewsFactory;

describe('myApp.reviews.factory', () => {
    beforeEach(angular.mock.module('myApp.reviews'));
    beforeEach(inject((_reviewsFactory_) => {
        ReviewsFactory = _reviewsFactory_;
    }));

    it('has particular properties', () => {
        assert(new ReviewsFactory().hasOwnProperty('reviews'));
    });

    it('reviews is Array', () => {
        assert(Array.isArray(new ReviewsFactory().reviews));
    });

    it('provides reviews with particular length', () => {
        const length = 2;

        assert(new ReviewsFactory(length).reviews.length === length);
    });
});
