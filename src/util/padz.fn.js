const padz = (

    (n, string) => {

        if (!string) {
            return '0'.repeat(n);
        }

        const diff = n - string.length;
        if (1 > diff) {
            return string;
        }

        return '0'.repeat(diff) + string;
    }

);


export default padz;
