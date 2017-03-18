import angular from 'angular';
import Util from '../../lib/util';

angular.module('myApp.carPhotos').factory('CarPhotosService', factory);

function factory() {
    return Service;
}

class Service extends Util {
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

        super(...arguments);

        this._data = data;
        this._carSlug = carSlug;
        this.fullSizePhoto = require(data[carSlug][0]); // eslint-disable-line no-undef
        this.photos = this.constructor.separate(data[carSlug]);
    }

    getFullsizePhoto(i) {
        return require(this._data[this._carSlug][i]); // eslint-disable-line no-undef
    }

    static separate(photos) {
        const result = super.separate(photos);

        result.forEach((pill) => {
            pill.forEach((item) => {
                item.value = require(item.value); // eslint-disable-line no-undef
            });
        });

        return result;
    }
}
