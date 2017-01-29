import assert from 'assert';
import angular from 'angular';
import '.';

let $compile;
let $rootScope;

describe('myApp.link.directive', () => {
    beforeEach(angular.mock.module('myApp.link'));
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('is a href link', () => {
        const url = 'foo.com';
        const element = $compile(`<foo><fp-link data-url="${url}"></fp-link></foo>`)($rootScope);
        let link;

        $rootScope.$digest();

        link = element.children()[0];

        assert.strictEqual(link.tagName.toLowerCase(), 'a');
        assert.strictEqual(link.getAttribute('href'), url);
    });

    it('is a sref link', () => {
        const state = 'foo';
        const element = $compile(`<foo><fp-link data-state="${state}"></fp-link></foo>`)($rootScope);
        let link;

        $rootScope.$digest();

        link = element.children()[0];

        assert.strictEqual(link.tagName.toLowerCase(), 'a');
        assert.strictEqual(link.getAttribute('ui-sref'), state);
    });

    it('has `.link` class', () => {
        const element = $compile('<foo><fp-link data-url="foo.com"></fp-link></foo>')($rootScope);

        $rootScope.$digest();

        assert(element.children().hasClass('link'));
    });


    it('has particular text inside', () => {
        const text = 'foo :)';
        const element = $compile(`<foo><fp-link data-url="foo.com">${text}</fp-link></foo>`)($rootScope);

        $rootScope.$digest();

        assert.strictEqual(element.children().text(), text);
    });
});
