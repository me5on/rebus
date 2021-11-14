import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {str} = IS;


// greedy any number of occurrences


const gany = (

    $ => (
        str($)
            ? `${$}*`
            : ''
    )

);


export default gany;
