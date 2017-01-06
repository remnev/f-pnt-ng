import assert from 'assert';
import angular from 'angular';
import '.';

let headerService;

describe('myApp.header.service', () => {
    beforeEach(angular.mock.module('myApp.header'));
    beforeEach(inject((_headerService_) => {
        headerService = _headerService_;
    }));

    it('has particular properties', () => {
        assert(headerService.hasOwnProperty('breadcrumbs'));
        assert(headerService.hasOwnProperty('menuItems'));
    });

    describe('myApp.header.service.toggleBreadcrumbs()', () => {
        it('set breadcrumbs as visible', () => {
            headerService.toggleBreadcrumbs(true);

            assert(headerService.breadcrumbs.isVisible);
        });

        it('set breadcrumbs as invisible', () => {
            headerService
                .toggleBreadcrumbs(true)
                .toggleBreadcrumbs(false);

            assert(!headerService.breadcrumbs.isVisible);
        });
    });

    describe('myApp.header.service.setBreadcrumbs()', () => {
        it('set breadcrumbs\' items', () => {
            const data = [
                {path: 'foo', title: 'bar'},
            ];

            headerService.setBreadcrumbs(data);

            assert.deepEqual(headerService.breadcrumbs.items, [{path: '/', title: 'Главная'}].concat(data));
        });
    });

    describe('myApp.header.service.setActiveMenuItem()', () => {
        it('set active item', () => {
            const slug = 'two';

            headerService.menuItems = [
                {path: 'foo', title: 'bar', slug: 'one'},
                {path: 'baz', title: 'quiz', slug: 'two'},
            ];

            headerService.setActiveMenuItem(slug);

            assert.deepEqual(headerService.menuItems.filter((item) => item.isActive)[0].slug, slug);
        });
    });
});
