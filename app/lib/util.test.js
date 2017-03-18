import assert from 'assert';
import Util from './util';

describe('lib.Util', () => {
    describe('.separate()', () => {
        it('should separate passed items by groups', () => {
            const separatedItems = Util.separate([
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
                'item',
            ]);
            const firstGroupLength = separatedItems[0].length;
            const secondGroupLength = separatedItems[1].length;
            const thirdGroupLength = separatedItems[2].length;

            assert(firstGroupLength > 0 && firstGroupLength < 4);
            assert(secondGroupLength > 0 && secondGroupLength < 3);
            assert(thirdGroupLength > 0 && thirdGroupLength < 4);
        });
    });
});
