import angular from 'angular';
import templateUrl from './car-photos.pug';

angular.module('myApp.carPhotos').directive('fpCarPhotos', directive);

function directive() {
    return {
        restrict: 'E',
        link: link,
        templateUrl: templateUrl,
        controller: Controller,
        controllerAs: 'vm',
        scope: {
            carSlug: '@car',
        },
        bindToController: true,
    };
}

function link(scope, element) {
    element.addClass('car-photos');
}

class Controller {
    constructor(CarPhotosService, $document, $scope) {
        this._CarPhotosService = CarPhotosService;
        this._$document = $document;
        this._$scope = $scope;
    }

    $onInit() {
        const service = new this._CarPhotosService(this.carSlug);

        this._carPhotoService = service;
        this.photos = service.photos;
        this.fullSizePhoto = service.fullSizePhoto;
        this.isFullsizePhotoVisible = false;

        this._onDocumentKeyup = (e) => {
            if (e.code === 'Escape') {
                this._hideFullsizePhoto();
            }
        };
    }

    onPhotoClick(i) {
        this.fullSizePhoto = this._carPhotoService.getFullsizePhoto(i);
        this._showFullsizePhoto();
    }

    onCloseFullsizeClick() {
        this._hideFullsizePhoto();
    }

    _showFullsizePhoto() {
        this.isFullsizePhotoVisible = true;
        this._$document.on('keyup', this._onDocumentKeyup);
    }

    _hideFullsizePhoto() {
        this.isFullsizePhotoVisible = false;
        this._$scope.$apply();
        this._$document.off('keyup', this._onDocumentKeyup);
    }
}

Controller.$inject = ['CarPhotosService', '$document', '$scope'];
