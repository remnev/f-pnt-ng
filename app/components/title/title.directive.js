import module from './title.module';
import angular from 'angular';

angular.module(module)
    .directive('fpTitle', directive);

function directive () {
    return {
        restrict: 'E',
        compile: compile
    };
}

function compile (element, attrs) {
    const replacer = angular
        .element(`<h${attrs.level}>`)
        .addClass('title')
        .text(element.text());

    element.replaceWith(replacer);
}
