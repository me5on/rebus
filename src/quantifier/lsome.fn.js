import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {str} = IS;


// lazy some number, at least one occurrence


const lsome = (

    $ => (
        str($)
            ? `${$}+?`
            : ''
    )

);


export default lsome;
