import templateUrl from './link.pug';
import module from './link.module';
import angular from 'angular';

angular.module(module)
    .directive('fpLink', directive);

function directive () {
    return {
        restrict: 'E',
        templateUrl: templateUrl,
        replace: true,
        transclude: true,
        scope: {
            url: '@'
        },
        controllerAs: 'vm',
        bindToController: true,
        controller: class {}
    };
}
