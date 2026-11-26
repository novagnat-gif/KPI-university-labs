const difference = (array1, array2) =>
    array1.filter((item) => !array2.includes(item));

const nums1 = [7, -2, 10, 5, 0];
const nums2 = [0, 10];
console.log(difference(nums1, nums2));

const cities1 = ['Beijing', 'Kiev'];
const cities2 = ['Kiev', 'London', 'Baghdad'];
console.log(difference(cities1, cities2));