import angular from 'angular';
import assert from 'assert';
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

    describe('._separate()', () => {
        it('photos should be separated by groups', () => {
            const photos = carPhotosService._separate([
                './car-photos.images/no-photo.jpg',
                './car-photos.images/no-photo.jpg',
                './car-photos.images/no-photo.jpg',
                './car-photos.images/no-photo.jpg',
                './car-photos.images/no-photo.jpg',
                './car-photos.images/no-photo.jpg',
                './car-photos.images/no-photo.jpg',
                './car-photos.images/no-photo.jpg',
                './car-photos.images/no-photo.jpg',
            ]);
            const firstGroupLength = photos[0].length;
            const secondGroupLength = photos[1].length;
            const thirdGroupLength = photos[2].length;

            assert(firstGroupLength > 0 && firstGroupLength < 4);
            assert(secondGroupLength > 0 && secondGroupLength < 3);
            assert(thirdGroupLength > 0 && thirdGroupLength < 4);
        });
    });
});
