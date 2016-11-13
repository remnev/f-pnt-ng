import '../../components/history';
import '../../components/reviews';
import '../../components/link';

import angular from 'angular';

const deps = [
    'ngRoute',
    'myApp.history',
    'myApp.reviews',
    'myApp.link'
];

angular.module('myApp.views.mainPage', deps);
