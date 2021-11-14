import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {str, number: {int}} = IS;


// greedy between two numbers of occurrences


const gin = (

    (from, to, $) => (
        int(from) && int(to) && 0 < from && 0 < to && str($)
            ? (
                from > to
                    ? `${$}{${to},${from}}`
                    : `${$}{${from},${to}}`
            )
            : ''
    )

);


export default gin;
