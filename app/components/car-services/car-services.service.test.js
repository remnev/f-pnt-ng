import assert from 'assert';
import angular from 'angular';
import '.';

let carServicesService;

describe('myApp.carServices.service', () => {
    beforeEach(angular.mock.module('myApp.carServices'));
    beforeEach(inject((_carServicesService_) => {
        carServicesService = _carServicesService_;
    }));

    it('has number of services', () => {
        assert(carServicesService.carServices.length);
    });

    describe('.getCarServices()', () => {
        it('returns services', () => {
            assert.strictEqual(carServicesService.getCarServices().length, carServicesService.carServices.length);
        });

        it('result has particular length', () => {
            const length = 2;

            assert.strictEqual(carServicesService.getCarServices(length).length, length);
        });

        it('result may be filtered by a region', () => {
            const region = 'moscow';
            const filteredServices = carServicesService.getCarServices(1, region);

            assert(filteredServices.every((service) => service.region.indexOf(region) !== -1));
        });

        it('result has order from great rating to less', () => {
            assert(carServicesService.getCarServices().every((service, i, arr) => {
                if (!arr[i + 1]) {
                    return true;
                }

                return service.rating >= arr[i + 1].rating;
            }));
        });
    });
});
