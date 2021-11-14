import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {str} = IS;


// greedy maybe one or maybe no occurrence


const gmaybe = (

    $ => (
        str($)
            ? `${$}?`
            : ''
    )

);


export default gmaybe;
