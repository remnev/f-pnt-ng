import hrefTmpl from './link-href.pug';
import srefTmpl from './link-sref.pug';
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
            state: '@',
        },
        controllerAs: 'vm',
        bindToController: true,
        controller: class {},
    };
}

function templateUrl(elem, attr) {
    if (attr.url) {
        return hrefTmpl;
    }

    if (attr.state) {
        return srefTmpl;
    }

    throw new Error('No attribute passed, expected: `data-url`, `data-state`');
}
