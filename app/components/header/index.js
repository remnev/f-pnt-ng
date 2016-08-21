import './header.styl';
import tmpl from './header.pug';

import angular from 'angular';

angular.module('myApp.header', [])
    .directive('fpHeader', function() {
        return {
            templateUrl: tmpl,
            restrict: 'E'
        };
    });
