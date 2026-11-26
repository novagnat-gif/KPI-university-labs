const array = () => {
    const items = [];
    const get = (index) => items[index];
    get.push = (value) => items.push(value);
    get.pop = () => items.pop();
    return get;
};

const arr = array();

arr.push('apple');
arr.push('banana');
arr.push('cherry');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());