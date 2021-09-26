import IS from '@me5on/is';


// Character classes,
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes


// positive unicode value


const nuv = (

    (nam, val) => (
        IS.nil(nam) || !(IS.str(nam) || nam instanceof String) || IS.nil(val) || !(IS.str(val) || val instanceof String)
            ? ''
            : nam && `\\P{${nam}=${val}}`
    )

);


export default nuv;
