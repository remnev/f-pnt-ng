import angular from 'angular';
import '../title';
import '../link';

const module = angular.module('myApp.history', ['myApp.title', 'myApp.link']);

export default module.name;
