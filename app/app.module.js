import './views/main-page';
import './components/header';
import './components/footer';

import angular from 'angular';

angular.module('myApp', ['myApp.views.mainPage', 'myApp.header', 'myApp.footer']);
