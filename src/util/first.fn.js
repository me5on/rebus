const RE = /[^A-Za-z]/gu;

const first = (

    (n, string) => {
        if (!string) {
            return '';
        }
        return String(string).replaceAll(RE, '').slice(0, n);
    }

);


export default first;
