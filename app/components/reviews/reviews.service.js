import angular from 'angular';
import Util from '../../lib/util';

angular.module('myApp.reviews')
    .factory('ReviewsService', factory);

function factory() {
    return Service;
}

class Service extends Util {
    constructor() {
        super(...arguments);

        this.reviews = require('./reviews.data'); // eslint-disable-line no-undef
        this.reviewsRemainder = 0;
        this.showMoreCount = 0;
        this._offset = 0;
    }

    getReviews(limit, car='all') {
        let reviews = this.reviews;
        let slicedReviews;
        let separatedReviews;

        if (car !== 'all') {
            reviews = reviews.filter((review) => review.car.slug === car);
        }

        slicedReviews = reviews.slice(this._offset, this._offset + limit);
        separatedReviews = this.constructor.separate(slicedReviews);

        this._offset += limit;
        this.reviewsRemainder = reviews.length - this._offset;
        this.showMoreCount = Math.max(Math.min(limit, reviews.length - this._offset), 0);

        return separatedReviews;
    }
}
