import angular from 'angular';

angular.module('myApp.header')
    .factory('headerService', factory);

function factory() {
    return new Service();
}

class Service {
    constructor() {
        this.breadcrumbs = {
            isVisible: false,
            items: [],
        };

        this.menuItems = [
            {slug: 'main', state: 'main', title: 'Главная'},
            {slug: 'car', state: 'car({car: "punto"})', title: 'Машины'},
            // {path: '/services/', title: 'Сервисы'},
            // {path: '/parts/', title: 'Запчасти'},
            // {path: '/q-a/', title: 'Вопросы-ответы'}
        ];
    }

    toggleBreadcrumbs(isVisible) {
        this.breadcrumbs.isVisible = Boolean(isVisible);

        return this;
    }

    setBreadcrumbs(data) {
        this.breadcrumbs.items = data.reduce((acc, item) => {
            acc.push({state: item.state, title: item.title});

            return acc;
        }, [{state: 'main', title: 'Главная'}]);

        return this;
    }

    setActiveMenuItem(slug) {
        this.menuItems.forEach((item) => {
            if (item.slug === slug) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
        });

        return this;
    }
}
