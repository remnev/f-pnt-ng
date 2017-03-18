export default class Util {
    static separate(list) {
        let oddCounter = 0;
        let evenCounter = 0;

        return list.reduce((acc, value, i, arr) => {
            const item = {value, i};

            /* istanbul ignore else  */
            if (oddCounter < 3 && evenCounter === 0 || evenCounter >= 2) {
                evenCounter = 0;

                if (oddCounter === 0) {
                    acc.push([]);
                }

                acc[acc.length - 1].push(item);
                oddCounter += 1;
            } else if (evenCounter < 2) {
                oddCounter = 0;

                if (evenCounter === 0) {
                    acc.push([]);
                }

                acc[acc.length - 1].push(item);
                evenCounter += 1;
            }

            return acc;
        }, []);
    }
}
