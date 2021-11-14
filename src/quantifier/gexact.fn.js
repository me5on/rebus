import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {str, number: {int}} = IS;


// greedy exact number of occurrences


const gexact = (

    (count, $) => (
        int(count) && 0 < count && str($)
            ? `${$}{${count}}`
            : ''
    )

);


export default gexact;