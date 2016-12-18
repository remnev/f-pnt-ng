import assert from 'assert';
import angular from 'angular';
import '.';

let partsShopsService;

describe('myApp.partsShops.service', () => {
    beforeEach(angular.mock.module('myApp.partsShops'));
    beforeEach(inject((_partsShopsService_) => {
        partsShopsService = _partsShopsService_;
    }));

    it('has number of shops', () => {
        assert(partsShopsService.partsShops.length);
    });

    describe('.getPartsShops()', () => {
        it('returns shops', () => {
            assert.strictEqual(partsShopsService.getPartsShops().length, partsShopsService.partsShops.length);
        });

        it('result has particular length', () => {
            const length = 2;

            assert.strictEqual(partsShopsService.getPartsShops(length).length, length);
        });

        it('result may be filtered by a region', () => {
            const region = 'moscow';

            assert(partsShopsService.getPartsShops(1, region).every((shop) => shop.region.indexOf(region) !== -1));
        });

        it('result has order from great rating to less', () => {
            assert(partsShopsService.getPartsShops().every((shop, i, arr) => {
                if (!arr[i + 1]) {
                    return true;
                }

                return shop.rating >= arr[i + 1].rating;
            }));
        });
    });
});
