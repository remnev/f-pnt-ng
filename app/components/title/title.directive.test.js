import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;

describe('myApp.title.directive', () => {
    beforeEach(angular.mock.module('myApp.title'));
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('tag has particular level', () => {
        ['1', '2', '10'].forEach((level) => {
            const element = $compile(`<foo><fp-title data-level="${level}"></fp-title></foo>`)($rootScope);

            assert.strictEqual(element.children()[0].tagName, `H${level}`);
        });
    });

    it('has `.title` class', () => {
        const element = $compile('<foo><fp-title data-level="1"></fp-title></foo>')($rootScope);

        assert(element.children().hasClass('title'));
    });


    it('has particular text inside', () => {
        const text = 'foo :)';
        const element = $compile(`<foo><fp-title data-level="1">${text}</fp-title></foo>`)($rootScope);

        assert.strictEqual(element.children().text(), text);
    });
});
