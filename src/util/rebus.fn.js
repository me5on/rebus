import IS from '@me5on/is';
import create from './create.fn.js';
import fuse from './fuse.fn.js';


const {arr, rgx} = IS;


const rebus = (

    (flags, regex, ...$$) => {

        flags ??= '';
        if (arr(flags)) {
            flags = fuse(flags);
        }

        if ($$.length) {
            regex = [regex, ...$$];
        }

        if (arr(regex)) {
            regex = fuse(regex);
        }
        
        regex ??= '';

        return (
            rgx(regex)
                ? create(flags, regex.pattern)
                : (
                    rgx(flags)
                        ? create(flags.flags, flags.pattern)
                        : create(flags, String(regex))
                )
        );
    }

);


export default rebus;
