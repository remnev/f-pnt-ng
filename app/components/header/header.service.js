import angular from 'angular';
import module from './header.module';

angular.module(module).service('headerService', Service);

function Service () {
    this.breadcrumbs = {
        isVisible: false,
        items: []
    };

    this.menuItems = [
        {slug: 'main', path: '/', title: 'Главная'},
        {slug: 'cars', path: '/cars/', title: 'Машины'},
        // {path: '/services/', title: 'Сервисы'},
        // {path: '/parts/', title: 'Запчасти'},
        // {path: '/q-a/', title: 'Вопросы-ответы'}
    ];
}

Service.prototype.toggleBreadcrumbs = function (isVisible) {
    this.breadcrumbs.isVisible = Boolean(isVisible);

    return this;
};

Service.prototype.setBreadcrumbs = function (data) {
    this.breadcrumbs.items = data.reduce((acc, item) => {
        acc.push({path: item.path, title: item.title});

        return acc;
    }, [{path: '/', title: 'Главная'}]);

    return this;
};

Service.prototype.setActiveMenuItem = function (slug) {
    this.menuItems.forEach((item) => {
        if (item.slug === slug) {
            item.isActive = true;
        } else {
            item.isActive = false;
        }
    });

    return this;
};
