import assert from 'assert';
import angular from 'angular';
import '.';

let carMenuService;
const slug = 'punto';

describe('myApp.carMenu.service', () => {
    beforeEach(angular.mock.module('myApp.carMenu'));
    beforeEach(inject((_CarMenuService_) => {
        carMenuService = new _CarMenuService_(slug);
    }));

    it('has image', () => {
        assert(carMenuService.image);
    });

    it('has divisionsMenuItems', () => {
        assert(carMenuService.divisionsMenuItems.length);
    });

    it('has modelsMenuItems', () => {
        assert(carMenuService.modelsMenuItems.length);
    });

    it('has active modelsMenuItems item', () => {
        assert.strictEqual(carMenuService.modelsMenuItems.filter((item) => item.isActive)[0].slug, slug);
    });
});
