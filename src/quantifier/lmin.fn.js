import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {str, number: {int}} = IS;


// lazy minimal number of occurrences


const lmin = (

    (count, $) => (
        int(count) && 0 < count && str($)
            ? `${$}{${count},}?`
            : ''
    )

);


export default lmin;
