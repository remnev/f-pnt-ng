import '../../components/history';
import '../../components/title';

import angular from 'angular';

const deps = [
    'ngRoute',
    'myApp.history',
    'myApp.title'
];

angular.module('myApp.views.mainPage', deps);
