/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import iref from './iref.fn.js';


describe('rebus.iref', () => {

    it(
        'is a function',
        () => void expect(iref).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', 'asdf'],
        ['\\1', 1],
    ])(
        'returns correct string %p for %p',
        expect(iref).toMapExact,
    );

});
