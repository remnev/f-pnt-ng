import angular from 'angular';
import module from './region.module';

angular.module(module)
    .filter('fpRegion', filter);

function filter (regionService) {
    return (input) => regionService.getRegion(input);
}

filter.$inject = ['regionService'];
