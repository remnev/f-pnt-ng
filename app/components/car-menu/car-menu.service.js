import angular from 'angular';

angular.module('myApp.carMenu')
    .factory('CarMenuService', factory);

function factory() {
    return Service;
}

class Service {
    constructor(carSlug) {
        this.image = require(`./images/${carSlug}.jpg`); // eslint-disable-line no-undef
        this.divisionsMenuItems = [
            {
                title: 'Технические характеристики',
                slug: 'tech-specs',
            },
            {
                title: 'Фото',
                slug: 'photos',
            },
            {
                title: 'Отзывы',
                slug: 'reviews',
            },
        ];
        this.modelsMenuItems = [
            {
                slug: 'punto-176',
                title: 'Punto 1',
                dates: {
                    from: '1993',
                    to: '1999',
                },
            },
            {
                slug: 'punto-188',
                title: 'Punto 2',
                dates: {
                    from: '1999',
                    to: '2003',
                },
            },
            {
                slug: 'punto-188-facelift',
                title: 'Punto 2 Facelift',
                dates: {
                    from: '2003',
                    to: '2005',
                },
            },
            {
                slug: 'grande-punto-199',
                title: 'Grande Punto',
                dates: {
                    from: '2005',
                    to: '2009',
                },
            },
            {
                slug: 'punto-evo',
                title: 'Punto Evo',
                dates: {
                    from: '2009',
                    to: '2012',
                },
            },
            {
                slug: 'punto',
                title: 'Punto',
                dates: {
                    from: '2012',
                    to: 'н. в.',
                },
            },
        ]
        .reverse()
        .map((item) => {
            item.isActive = item.slug === carSlug;

            return item;
        });
    }
}
