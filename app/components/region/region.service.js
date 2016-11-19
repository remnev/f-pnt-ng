import angular from 'angular';
import module from './region.module';

angular.module(module)
    .service('regionService', Service);

function Service () {
    this.regions = {
        moscow: 'г. Москва',
        'saint-petersburg': 'г. Санкт-Петербург',
        'moscow-region': 'Московская область',
        mytishchi: 'г. Мытищи'
    };
}

Service.prototype.getRegion = function (slug) {
    return this.regions[slug];
};
