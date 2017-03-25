import angular from 'angular';
import '../../components/title';
import '../../components/car-menu';
import '../../components/car-tech-specs';
import '../../components/car-photos';
import '../../components/car';
import '../../components/reviews';
import 'angular-ui-router';

const deps = [
    'myApp.carMenu',
    'myApp.carTechSpecs',
    'myApp.carPhotos',
    'ui.router',
    'myApp.title',
    'myApp.car',
    'myApp.reviews',
];

angular.module('myApp.views.car', deps);
