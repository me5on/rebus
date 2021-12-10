/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import nref from './nref.fn.js';


describe('rebus.nref', () => {

    it(
        'is a function',
        () => void expect(nref).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['\\k<asdf>', 'asdf'],
        ['\\k<1>', 1],
    ])(
        'returns correct string %p for %p',
        expect(nref).toMapExact,
    );

});
