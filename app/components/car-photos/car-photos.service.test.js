import angular from 'angular';
import assert from 'assert';
import _ from 'lodash';
import '.';

let carPhotosService;
const slug = 'grande-punto-199';

describe('myApp.carPhotos.service', () => {
    beforeEach(angular.mock.module('myApp.carPhotos'));
    beforeEach(inject((_CarPhotosService_) => {
        carPhotosService = new _CarPhotosService_(slug);
    }));

    it('has photos data', () => {
        assert(carPhotosService.photos);
    });

    it('photos is Array', () => {
        assert(Array.isArray(carPhotosService.photos));
    });

    describe('.getFullsizePhoto()', () => {
        it('should return a certain photo by slug', () => {
            assert(carPhotosService.getFullsizePhoto(0));
        });
    });

    describe('.separate()', () => {
        it('each photo should be an object (means was read from fs)', () => {
            const pills = carPhotosService.constructor.separate([
                './car-photos.images/no-photo.jpg',
                './car-photos.images/no-photo.jpg',
            ]);

            pills.forEach((pill) => {
                pill.forEach((photo) => {
                    assert(_.isObject(photo.value));
                });
            });
        });
    });
});
