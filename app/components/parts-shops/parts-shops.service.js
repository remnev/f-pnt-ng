import angular from 'angular';
import module from './parts-shops.module';

angular.module(module)
    .service('partsShopsService', Service);

function Service () {
    this.partsShops = [
        {
            name: 'Компания Спектр',
            slug: 'company-spectr',
            region: ['moscow'],
            address: [
                'ул. Сергия Радонежского, д. 21'
            ],
            site: 'http://fiatparts.ru',
            phone: [
                {
                    code: '495',
                    number: '788-12-88'
                }
            ],
            rating: 21,
            description: 'Полный ассортимент запчастей (оригинальных и неоригинальных) в наличии для автомобилей Fiat, Alfa Romeo, Lancia. Запчасти на Fiat Ducato российской сборки.'
        },
        {
            name: 'Автоиталия',
            slug: 'autoitaly',
            region: ['saint-petersburg'],
            address: [
                'ул. Гидротехников, д. 6'
            ],
            site: 'http://fiatclub.ru',
            phone: [
                {
                    code: '812',
                    number: '788-12-88'
                }
            ],
            rating: 121,
            description: 'Наша компания занимается поставкой запасных частей для итальянских автомобилей.'
        },
        {
            name: 'Интернет-магазин Fiat-Пермь',
            slug: 'fiat-perm',
            region: ['perm'],
            address: [
                'ул. Плеханова, д. 46, офис 214'
            ],
            site: 'http://autofiat.perm.ru',
            phone: [
                {
                    code: '963',
                    number: '87-39-384'
                }
            ],
            rating: 5,
            description: 'Мы предлагаем только качественные расходные материалы для автомобилей марки Fiat, подтвержденные сертификатами качества.'
        },
        {
            name: 'Итал-Парты',
            slug: 'ital-parts',
            region: ['moscow'],
            address: [
                'ул. Южнопортовая, д. 36, стр. 6',
                'ул. Тудымсюдым, д. 3'
            ],
            site: 'http://ital-parts.ru',
            phone: [
                {
                    code: '495',
                    number: '649-33-91'
                }
            ],
            rating: 18,
            description: 'Наша компания занимается поставкой запасных частей для итальянских автомобилей.'
        }
    ];
}

Service.prototype.getPartsShops = function (limit, region='all') {
    let shops = this.partsShops;

    if (region !== 'all') {
        shops = shops.filter((shop) => shop.region.indexOf(region) !== -1);
    }

    return shops
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
};
