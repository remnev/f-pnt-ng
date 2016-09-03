import tmpl from './header.pug';

import angular from 'angular';

angular.module('myApp.header')
    .directive('fpHeader', directive);

directive.$inject = ['$location'];

function directive ($location) {
    return {
        templateUrl: tmpl,
        restrict: 'E',
        link: link
    };

    function link (scope, element) {
        element.addClass('header');

        scope.isLinkActive = isLinkActive;
    }

    function isLinkActive (href) {
        return href === $location.path();
    }
}
