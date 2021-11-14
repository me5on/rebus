import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {str} = IS;


// lazy maybe one or maybe no occurrence


const lmaybe = (

    $ => (
        str($)
            ? `${$}??`
            : ''
    )

);


export default lmaybe;
