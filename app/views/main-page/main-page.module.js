import '../../components/history';
import '../../components/reviews';
import '../../components/car-services';
import '../../components/parts-shops';
import '../../components/link';
import 'angular-ui-router';
import angular from 'angular';

const deps = [
    'ui.router',
    'myApp.history',
    'myApp.reviews',
    'myApp.carServices',
    'myApp.partsShops',
    'myApp.link',
];

angular.module('myApp.views.mainPage', deps);
