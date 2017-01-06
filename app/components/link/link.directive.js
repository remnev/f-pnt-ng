import templateUrl from './link.pug';
import angular from 'angular';

angular.module('myApp.link')
    .directive('fpLink', directive);

function directive() {
    return {
        restrict: 'E',
        templateUrl: templateUrl,
        replace: true,
        transclude: true,
        scope: {
            url: '@',
        },
        controllerAs: 'vm',
        bindToController: true,
        controller: class {},
    };
}
