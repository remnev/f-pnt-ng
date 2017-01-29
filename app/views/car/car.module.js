import angular from 'angular';
import '../../components/car-menu';
import 'angular-ui-router';

angular.module('myApp.views.car', ['myApp.carMenu', 'ui.router']);
