import assert from 'assert';
import angular from 'angular';
import _ from 'lodash';
import '.';

let reviewsService;

describe('myApp.reviews.service', () => {
    beforeEach(angular.mock.module('myApp.reviews'));
    beforeEach(inject((_ReviewsService_) => {
        reviewsService = new _ReviewsService_();
    }));

    it('has particular properties', () => {
        assert(reviewsService.hasOwnProperty('reviews'));
        assert(reviewsService.hasOwnProperty('reviewsRemainder'));
        assert(reviewsService.hasOwnProperty('showMoreCount'));
    });

    it('reviews is Array', () => {
        assert(Array.isArray(reviewsService.reviews));
    });

    describe('.getReviews()', () => {
        it('provides reviews with particular length', () => {
            const length = 2;

            assert.strictEqual(_.flatten(reviewsService.getReviews(length)).length, length);
        });

        it('filters reviews by carSlug', () => {
            const length = 2;
            const slug = 'punto-evo';

            reviewsService.getReviews(length, slug)[0]
                .forEach((review) => {
                    assert.strictEqual(review.value.car.slug, slug);
                });
        });

        it('changes reviews remainder in a proper way', () => {
            const limit = 2;
            const initialRemainder = reviewsService.reviews.length;

            reviewsService.getReviews(limit);

            assert.strictEqual(reviewsService.reviewsRemainder, initialRemainder - limit);
        });

        it('changes `showMoreCount` in a proper way', () => {
            const limit = 2;
            const reviewsLength = 5;

            reviewsService.reviews.splice(reviewsLength - reviewsService.reviews.length);

            reviewsService.getReviews(limit);
            assert.strictEqual(reviewsService.showMoreCount, limit);

            reviewsService.getReviews(limit);
            assert.strictEqual(reviewsService.showMoreCount, reviewsLength - limit * 2/* times of execution */);
        });
    });
});
