import angular from 'angular';

angular.module('myApp.region')
    .factory('regionService', factory);

function factory() {
    return new Service();
}

class Service {
    constructor() {
        this.regions = {
            'moscow': 'г. Москва',
            'saint-petersburg': 'г. Санкт-Петербург',
            'moscow-region': 'Московская область',
            'mytishchi': 'г. Мытищи',
            'perm': 'г. Пермь',
        };
    }

    getRegion(slug) {
        return this.regions[slug];
    }
}
