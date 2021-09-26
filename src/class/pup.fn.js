import IS from '@me5on/is';


// Character classes,
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes


// positive unicode property


const pup = (

    $ => (
        IS.nil($) || !(IS.str($) || $ instanceof String)
            ? ''
            : $ && `\\p{${$}}`
    )

);


export default pup;
