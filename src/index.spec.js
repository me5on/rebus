/* eslint-disable new-cap,max-lines-per-function */


import {describe, expect, it} from '@jest/globals';
import IS from '@me5on/is';
import rebus from './index.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


const sortedValues = (

    $ => $
        ? Object.values($)
        : []

);


describe('rebus lib', () => {

    const asrt = ['bgn', 'end', 'pwb', 'nwb'].sort();
    const flag = ['indices', 'global', 'ignore', 'multiline', 'dotall', 'unicode', 'sticky'].sort();
    const klas = [
        'any',
        'pdigit', 'ndigit', 'pword', 'nword', 'pspace', 'nspace',
        'backspace', 'tab', 'vtab', 'return', 'newline', 'formfeed', 'nul',
    ].sort();
    const unic = ['binary', 'general', 'prop', 'script'].sort();

    const cons = ['ESC', 'esc', 'escape'];

    const objs = [
        ['assert', asrt], ['ASSERT', asrt], ['A', asrt],
        ['class', klas], ['CLASS', klas], ['C', klas],
        ['flag', flag], ['FLAG', flag], ['F', flag],
        ['unicode', unic], ['UNICODE', unic], ['U', unic],
    ].sort();

    const funs = [
        'ctl', 'hex', 'utf', 'uni',
        'pup', 'nup', 'puv', 'nuv',
        'bgn', 'end', 'nla', 'nlb', 'pla', 'plb',
        'nc', 'pc', 'or',
        'cap', 'nocap',
        'ref', 'iref', 'nref',
    ].sort();

    const fields = [...cons, ...objs.map($ => $?.[0]), ...funs].sort();


    it(
        'rebus is a function',
        () => void expect(rebus).toBeFun(rebus),
    );

    it(
        'contains fields',
        () => void expect(sortedKeys(rebus)).toEqual(fields),
    );

    describe.each(cons)('constant', name => { // eslint-disable-line no-shadow
        describe(`rebus.${name}`, () => {

            const c = rebus[name];

            it(
                'is a string',
                () => void expect(typeof c).toEqual('string'),
            );

        });
    });

    describe.each(objs)('object', (name, keys) => { // eslint-disable-line no-shadow

        describe(`rebus.${name}`, () => {

            const $ = rebus[name];

            it(
                'is an object',
                () => void expect(IS.ob.plain($)).toEqual(true),
            );


            it(
                'contains fields',
                () => void expect(sortedKeys($)).toEqual(keys),
            );

            it(
                'fields are non-empty string',
                () => void expect(sortedValues($).every($ => !IS.str.empty($))).toEqual(true),
            );

        });
    });

    describe.each(funs)('function', name => { // eslint-disable-line no-shadow
        describe(`rebus.${name}`, () => {

            const fn = rebus[name];

            it(
                'is a function',
                () => void expect(fn).toBeFun(name),
            );

        });
    });


});
