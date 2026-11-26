const compose = (...fns) => {
    const handlers = [];

    const composed = (x) => {
        try {
            return fns.reduceRight((val, fn) => fn(val), x);
        } catch (err) {
            for (const handler of handlers) {
                handler(err);
            }
            return undefined;
        }
    };

    composed.on = (event, handler) => {
        if (event === 'error' && typeof handler === 'function') {
            handlers.push(handler);
        }
    };

    return composed;
};

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const fail = () => {
    throw new Error('Something went wrong');
};

const safeFn = compose(addOne, double);
console.log(safeFn(4));

const brokenFn = compose(addOne, fail, double);
brokenFn.on('error', (e) => {
    console.log('Error handled:', e.message);
});
console.log(brokenFn(4));