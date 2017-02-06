import angular from 'angular';
import '../../components/title';
import '../../components/car-menu';
import '../../components/car-tech-specs';
import 'angular-ui-router';

angular.module('myApp.views.car', ['myApp.carMenu', 'myApp.carTechSpecs', 'ui.router', 'myApp.title']);
