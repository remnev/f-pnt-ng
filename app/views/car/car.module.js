import angular from 'angular';
import '../../components/title';
import '../../components/car-menu';
import '../../components/car-tech-specs';
import '../../components/car';
import 'angular-ui-router';

const deps = [
    'myApp.carMenu',
    'myApp.carTechSpecs',
    'ui.router',
    'myApp.title',
    'myApp.car',
];

angular.module('myApp.views.car', deps);
