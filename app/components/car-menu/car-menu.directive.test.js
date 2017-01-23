import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;
let element;

describe('myApp.carMenu.directive', () => {
    beforeEach(angular.mock.module('myApp.carMenu'));
    beforeEach(() => {
        angular.mock.module(($provide) => {
            $provide.factory('CarMenuService', () => class {
                constructor(carSlug) {
                    this.image = `${carSlug}.jpg`;
                    this.divisionsMenuItems = [
                        {
                            title: 'Технические характеристики',
                            slug: 'tech-specs',
                        },
                    ];
                    this.modelsMenuItems = [
                        {
                            slug: 'punto-176',
                            title: 'Punto 1',
                            dates: {
                                from: '1993',
                                to: '1999',
                            },
                        },
                        {
                            slug: 'shpunto',
                            title: 'Punto sh',
                            dates: {
                                from: '11',
                                to: '22',
                            },
                        },
                    ]
                    .map((item) => {
                        item.isActive = item.slug === carSlug;

                        return item;
                    });
                }
            });
        });
    });
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));
    beforeEach(() => {
        element = $compile('<fp-car-menu data-car="shpunto"></fp-car-menu>')($rootScope);
        $rootScope.$digest();
    });

    it('has `.car-menu` class', () => {
        assert(element.hasClass('car-menu'));
    });

    it('has image of car', () => {
        assert(element[0].querySelector('img.car-menu__image'));
    });

    it('has models menu items', () => {
        assert(element[0].querySelectorAll('.car-menu__models-menu-item').length);
    });

    it('has an active item of models menu', () => {
        assert(element[0].querySelector('.car-menu__models-menu-item.active'));
    });

    it('has title', () => {
        assert(element[0].querySelector('h1.title'));
    });

    it('has divisions menu items', () => {
        assert(element[0].querySelectorAll('.car-menu__divisions-menu-item').length);
    });
});
