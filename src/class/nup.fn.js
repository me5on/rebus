import IS from '@me5on/is';


// Character classes,
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes


// negative unicode property


const nup = (

    $ => (
        IS.nil($) || !(IS.str($) || $ instanceof String)
            ? ''
            : $ && `\\P{${$}}`
    )

);


export default nup;
