import angular from 'angular';

angular.module('myApp.history')
    .factory('fpHistoryService', factory);

function factory() {
    return new Service();
}

class Service {
    constructor() {
        this.headerText = 'История Fiat Punto: от начала до сегодняшнего дня';
        this.models = [
            {
                years: [1993, 1994, 1995, 1996, 1997, 1998],
                url: '/cars/punto-176/',
                title: 'Punto 1 (176)',
                description: 'Первое поколение модели Punto представлено публике в сентябре 1993 года. Позднее, в 1995 году, эта модель станет Автомобилем года в Европе. Дизайн разработан Джоржетто Джуджаро.', // eslint-disable-line
            },
            {
                years: [1999, 2000, 2001, 2002],
                url: '/cars/punto-188/',
                title: 'Punto 2 (188)',
                description: 'Сентябрь 1999 года, Франкфуртский автосалон. Мир увидел Fiat Punto второго поколения. Модель приурочили к столетию марки Fiat.', // eslint-disable-line
            },
            {
                years: [2003, 2004],
                url: '/cars/punto-188-facelift/',
                title: 'Punto 2 Facelift',
                description: 'Второе поколение Punto с новым экстерьером.',
            },
            {
                years: [2005, 2006, 2007, 2008],
                url: '/cars/grande-punto-199/',
                title: 'Grande Punto (199)',
                description: 'Третье поколение Fiat Punto. Дизайн разрабатывался Джуджаро, а платформа совместно Fiat и GM.', // eslint-disable-line
            },
            {
                years: [2009, 2010, 2011],
                url: '/cars/punto-evo/',
                title: 'Punto Evo',
                description: 'Фейслифт третьего поколения Fiat Punto. Новая передняя часть, задняя оптика, интерьер.',
            },
            {
                years: [2012, 2013, 2014, 2015, 2016, 2017],
                url: '/cars/punto/',
                title: 'Punto',
                description: 'Модель вернула себе облик передней части от классического Grande Punto, а задняя оптика и интерьер остались от Punto Evo.', // eslint-disable-line
            },
        ];
    }
}
