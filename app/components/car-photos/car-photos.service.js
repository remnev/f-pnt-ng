import angular from 'angular';

angular.module('myApp.carPhotos').factory('CarPhotosService', factory);

function factory() {
    return Service;
}

class Service {
    constructor(carSlug) {
        const data = {
            'punto-176': [
                './car-photos.images/no-photo.jpg',
            ],
            'punto-188': [
                './car-photos.images/no-photo.jpg',
            ],
            'punto-188-facelift': [
                './car-photos.images/no-photo.jpg',
            ],
            'grande-punto-199': [
                './car-photos.images/grande-punto-199-1.jpg',
                './car-photos.images/grande-punto-199-2.jpg',
                './car-photos.images/grande-punto-199-3.jpg',
                './car-photos.images/grande-punto-199-4.jpg',
            ],
            'punto-evo': [
                './car-photos.images/no-photo.jpg',
            ],
            'punto': [
                './car-photos.images/no-photo.jpg',
            ],
        };

        this._data = data;
        this._carSlug = carSlug;
        this.photos = this._separate(data[carSlug]);
        this.fullSizePhoto = require(data[carSlug][0]); // eslint-disable-line no-undef
    }

    getFullsizePhoto(i) {
        return require(this._data[this._carSlug][i]); // eslint-disable-line no-undef
    }

    _separate(photos) {
        let oddCounter = 0;
        let evenCounter = 0;

        return photos.reduce((acc, photoPath, i, arr) => {
            const photo = {
                path: require(photoPath), // eslint-disable-line no-undef
                i,
            };

            /* istanbul ignore else  */
            if (oddCounter < 3 && evenCounter === 0 || evenCounter >= 2) {
                evenCounter = 0;

                if (oddCounter === 0) {
                    acc.push([]);
                }

                acc[acc.length - 1].push(photo);
                oddCounter += 1;
            } else if (evenCounter < 2) {
                oddCounter = 0;

                if (evenCounter === 0) {
                    acc.push([]);
                }

                acc[acc.length - 1].push(photo);
                evenCounter += 1;
            }

            return acc;
        }, []);
    }
}
