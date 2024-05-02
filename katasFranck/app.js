const array = [1, 2, 3, 4, 5];

const addValueToArray = (array, val, index) => array[index === undefined ? array.length : index] = val;

addValueToArray(array, 6, 3);
console.log(array);