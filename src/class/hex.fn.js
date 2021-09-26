// Character classes, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

import IS from '@me5on/is';
import first from '../util/first.fn.js';
import padz from '../util/padz.fn.js';


const RE = /[^0-9A-Fa-f]/gu;

const BASE = 16;

const N = 2;


// noinspection DuplicatedCode
const hex = (

    $ => {

        if (IS.nil($)) {
            return '';
        }

        if (IS.int($)) {

            $ = ($ - 0).toString(BASE);

        } else if (IS.str($)) {

            $ = first(N, String($).replaceAll(RE, ''));

        } else {
            return '';
        }

        if (0 === $.length) {
            return '';
        }

        $ = padz(N, $).toUpperCase();

        return $ && `\\x${$}`;
    }

);


export default hex;
