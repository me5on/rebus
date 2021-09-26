// Character classes, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

import IS from '@me5on/is';
import first from '../util/first.fn.js';


const BASE = 'A'.codePointAt(0) - 1;

const A = 1;
const Z = 26;

const N = 1;


const ctl = (

    $ => {

        $ = (
            IS.int($) && A <= $ && Z >= $
                ? String.fromCodePoint(BASE + $)
                : first(N, $).toUpperCase()
        );

        return $ && `\\c${$}`;
    }

);


export default ctl;
