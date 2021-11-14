import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {str, number: {int}} = IS;


// greedy minimal number of occurrences


const gmin = (

    (count, $) => (
        int(count) && 0 < count && str($)
            ? `${$}{${count},}`
            : ''
    )

);


export default gmin;
