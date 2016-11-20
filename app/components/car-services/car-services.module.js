import angular from 'angular';
import '../region';
import '../link';

const module = angular.module('myApp.carServices', ['myApp.region', 'myApp.link']);

export default module.name;
