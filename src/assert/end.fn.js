import assemble from '../util/assemble.fn.js';


// assertions, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions


// negative lookahead


const end = (

    (...$$) => {
        const $ = assemble($$);
        return $ && `${$}$`;
    }


);


export default end;
