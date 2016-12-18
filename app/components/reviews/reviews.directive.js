import templateUrl from './reviews.pug';
import module from './reviews.module';
import angular from 'angular';

angular.module(module)
    .directive('fpReviews', directive);

function directive () {
    return {
        restrict: 'E',
        link: link,
        templateUrl: templateUrl,
        controller: Controller,
        controllerAs: 'vm',
        scope: {
            limit: '@'
        },
        bindToController: true
    };
}

function link (scope, element) {
    element.addClass('reviews');
}

class Controller {
    constructor (reviewsService) {
        this._reviewsService = reviewsService;
    }

    $onInit () {
        this.reviews = this._reviewsService.getReviews(this.limit);
    }

    getReviewTotalVote (votesData) {
        const votesFields = Object.keys(votesData);
        const sum = votesFields.reduce((acc, field) => acc += votesData[field], 0);

        return Math.floor(sum / votesFields.length);
    }
}

Controller.$inject = ['reviewsService'];
