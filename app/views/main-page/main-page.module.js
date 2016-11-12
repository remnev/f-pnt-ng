import '../../components/history';
import '../../components/title';
import '../../components/reviews';

import angular from 'angular';

const deps = [
    'ngRoute',
    'myApp.history',
    'myApp.title',
    'myApp.reviews'
];

angular.module('myApp.views.mainPage', deps);
