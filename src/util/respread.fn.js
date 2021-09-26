import IS from '@me5on/is';


const respread = (

    $$ => {

        if (0 === $$?.length) {
            return $$;
        }

        if (1 === $$?.length) {
            [$$] = $$;
        }

        if (!IS.arr($$)) {
            $$ = [$$];
        }

        return $$;

    }

);


export default respread;
