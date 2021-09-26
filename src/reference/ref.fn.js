import IS from '@me5on/is';
import iref from './iref.fn.js';
import nref from './nref.fn.js';


// groups and ranges, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges


// back reference, both named and indexed


const ref = (

    $ => IS.int($) && 0 < $ ? iref($) : nref($)

);


export default ref;
