function inc(num) {
    return num.n += 1
}

const obj = { n: 5 };

inc(obj);

console.dir(obj);