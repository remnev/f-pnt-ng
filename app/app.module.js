import './views/main-page';
import './views/car';
import './views/not-found';
import './components/header';
import './components/footer';
import angular from 'angular';

const deps = [
    'myApp.views.mainPage',
    'myApp.views.car',
    'myApp.views.notFound',
    'myApp.header',
    'myApp.footer',
];

angular.module('myApp', deps);
