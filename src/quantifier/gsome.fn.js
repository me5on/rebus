import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {str} = IS;


// greedy some number, at least one occurrence


const gsome = (

    $ => (
        str($)
            ? `${$}+`
            : ''
    )

);


export default gsome;
