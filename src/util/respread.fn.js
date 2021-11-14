import IS from '@me5on/is';


const {arr} = IS;


const respread = (

    $$ => {

        if (0 === $$?.length) {
            return $$;
        }

        if (1 === $$?.length) {
            [$$] = $$;
        }

        if (!arr($$)) {
            $$ = [$$];
        }

        return $$;

    }

);


export default respread;
