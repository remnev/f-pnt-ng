import assert from 'assert';
import angular from 'angular';
import '.';

let reviewsService;

describe('myApp.reviews.service', () => {
    beforeEach(angular.mock.module('myApp.reviews'));
    beforeEach(inject((_reviewsService_) => {
        reviewsService = _reviewsService_;
    }));

    it('has particular properties', () => {
        assert(reviewsService.hasOwnProperty('reviews'));
    });

    it('reviews is Array', () => {
        assert(Array.isArray(reviewsService.reviews));
    });

    it('provides reviews with particular length', () => {
        const length = 2;

        assert.strictEqual(reviewsService.getReviews(length).length, length);
    });
});
