const seq = (fn) => (arg) => {
    if (typeof arg === 'number') {
        return fn(arg);
    }
    return seq((x) => fn(arg(x)));
};

console.log(seq(x => x + 5)(x => x * 3)(4));
console.log(seq(x => x - 2)(x => x * 4)(10));