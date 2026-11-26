const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new Error('All arguments must be functions');
        }
    }
    return (x) => fns.reduce((val, fn) => fn(val), x);
};

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x ** 2;

const f1 = pipe(addOne, double, square);
console.log(f1(4));

const f2 = pipe(addOne, addOne);
console.log(f2(10));

try {
    pipe(addOne, 123, square);
} catch (err) {
    console.log('Caught error:', err.message);
}