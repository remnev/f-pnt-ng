import templateUrl from './reviews.pug';
import angular from 'angular';

angular.module('myApp.reviews')
    .directive('fpReviews', directive);

function directive() {
    return {
        restrict: 'E',
        link: link,
        templateUrl: templateUrl,
        controller: Controller,
        controllerAs: 'vm',
        scope: {
            limit: '@',
            car: '@',
            showMore: '@',
        },
        bindToController: true,
    };
}

function link(scope, element) {
    element.addClass('reviews');
}

class Controller {
    constructor(ReviewsService) {
        this._reviewsService = new ReviewsService();
    }

    $onInit() {
        this._limit = parseInt(this.limit, 10);

        this.reviews = this._reviewsService.getReviews(this._limit, this.car);
        this.isShowMoreButtonVisible = this.showMore;
        this.reviewsRemainder = this._reviewsService.reviewsRemainder;
        this.showMoreCount = this._reviewsService.showMoreCount;
    }

    getReviewTotalVote(votesData) {
        const votesFields = Object.keys(votesData);
        const sum = votesFields.reduce((acc, field) => acc += votesData[field], 0);

        return Math.floor(sum / votesFields.length);
    }

    onShowMoreButtonClick() {
        this.reviews = this.reviews.concat(this._reviewsService.getReviews(this._limit, this.car));
        this.showMoreCount = this._reviewsService.showMoreCount;
        this.reviewsRemainder = this._reviewsService.reviewsRemainder;
        this.isShowMoreButtonVisible = this.showMoreCount > 0;
    }
}

Controller.$inject = ['ReviewsService'];
