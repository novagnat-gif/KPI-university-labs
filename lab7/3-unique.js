const unique = (array) => Array.from(new Set(array));

const res1 = unique([2, 1, 1, 3, 2]);
console.log(res1);

const res2 = unique(['top', 'bottom', 'top', 'left']);
console.log(res2);