import assert from 'assert';
import angular from 'angular';
import '.';

let fpHistoryService;

describe('myApp.history.service', () => {
    beforeEach(angular.mock.module('myApp.history'));
    beforeEach(inject((_fpHistoryService_) => {
        fpHistoryService = _fpHistoryService_;
    }));

    it('has particular properties', () => {
        ['headerText', 'models'].forEach((property) => {
            assert(fpHistoryService.hasOwnProperty(property));
        });
    });

    it('headerText is String', () => {
        assert(angular.isString(fpHistoryService.headerText));
    });

    it('models is Array', () => {
        assert(Array.isArray(fpHistoryService.models));
    });

    it('has particular properties of every model', () => {
        fpHistoryService.models.every((model) => {
            ['years', 'slug', 'description'].forEach((property) => {
                assert(model.hasOwnProperty(property));
            });
        });
    });
});
