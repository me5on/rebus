import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


// lazy exact number of occurrences


const {str, number: {integer}} = IS;


const lexact = (

    (count, $) => (
        integer(count) && 0 < count && str($)
            ? `${$}{${count}}?`
            : ''
    )

);


export default lexact;
