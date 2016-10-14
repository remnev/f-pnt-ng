import templateUrl from './header.pug';

import './header.module';

import angular from 'angular';

// todo: get from a service
const menuItems = [
    {path: '/', title: 'Главная'},
    {path: '/cars/', title: 'Машины'},
    // {path: '/services/', title: 'Сервисы'},
    // {path: '/parts/', title: 'Запчасти'},
    // {path: '/q-a/', title: 'Вопросы-ответы'}
];

angular.module('myApp.header')
    .directive('fpHeader', directive);

directive.$inject = ['$location'];

function directive ($location) {
    return {
        templateUrl: templateUrl,
        restrict: 'E',
        link: link,
        controller: controller,
        controllerAs: 'vm'
    };

    function link (scope, element) {
        element.addClass('header');
    }

    function controller () {
        this.menuItems = menuItems.map(addIsActiveMethod);
    }

    function addIsActiveMethod (item) {
        item.isActive = isActive;

        return item;
    }

    function isActive (path) {
        return path === $location.path();
    }
}
