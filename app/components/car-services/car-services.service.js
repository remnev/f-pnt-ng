import angular from 'angular';

angular.module('myApp.carServices')
    .factory('carServicesService', factory);

function factory() {
    return new Service();
}

class Service {
    constructor() {
        this.carServices = [
            {
                name: 'Fiat-club',
                slug: 'fiat-club',
                region: ['moscow'],
                address: [
                    'Рязанский проспект, д. 2, стр. 40',
                ],
                phone: [
                    {
                        code: '495',
                        number: '788-12-88',
                    },
                ],
                rating: 21,
                description: 'Весь спектр услуг по ремонту легковых, грузовых и коммерческих автомобилей концерна Фиат(Fiat), включая кузовной ремонт.' // eslint-disable-line
            },
            {
                name: 'Alfa-mobil',
                slug: 'alfa-mobil',
                region: ['saint-petersburg'],
                address: [
                    'ул. Печатника Григорьева, д. 12',
                    'ул. Цветочная, д. 16, литер К',
                ],
                phone: [
                    {
                        code: '812',
                        number: '712-23-03',
                    },
                    {
                        code: '812',
                        number: '331-58-37',
                    },
                ],
                rating: 5,
                description: 'Сервис автомобилей Fiat, Alfa Romeo, Lancia, микроавтобусов Fiat Ducato, Citroen Jumper, Peugeot Boxer, Iveco Daily. Услуги: ТО, замена расходных материалов, жидкостей, элементов подвески, ремонт двигателей и прочий локальный ремонт, диагностика сканером, электрика.' // eslint-disable-line
            },
            {
                name: 'Арм-сервис',
                slug: 'arm-service',
                region: [
                    'moscow-region',
                    'mytishchi',
                ],
                address: [
                    'Проектируемый проезд 4529, стр. 3',
                ],
                phone: [
                    {
                        code: '495',
                        number: '587-40-20',
                    },
                ],
                rating: 1,
                description: 'При проведении ТО, незамерзающая жидкость в подарок.',
            },
            {
                name: 'Юна-авто',
                slug: 'una-auto',
                region: ['moscow'],
                address: [
                    'ул. Большая Академическая, д. 38, стр. 11',
                ],
                phone: [
                    {
                        code: '495',
                        number: '648-54-50',
                    },
                ],
                rating: 438,
                description: 'Послегарантийное обслуживание и ремонт итальянских автомобилей FIAT, Alfa-Romeo, Lancia,',
            },
            {
                name: 'Фуу-престиж',
                slug: 'foo-prestige',
                region: ['moscow'],
                address: [
                    'ул. Большая Академическая, д. 38, стр. 11',
                ],
                phone: [
                    {
                        code: '495',
                        number: '648-54-50',
                    },
                ],
                rating: 100,
                description: 'Послегарантийное обслуживание и ремонт итальянских автомобилей FIAT, Alfa-Romeo, Lancia,',
            },
        ];
    }

    getCarServices(limit, region='all') {
        let services = this.carServices;

        if (region !== 'all') {
            services = services.filter((service) => service.region.indexOf(region) !== -1);
        }

        return services
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
    }
}
