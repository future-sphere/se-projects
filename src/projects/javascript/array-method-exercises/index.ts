//1. isArray()
function isArray(arr) {
  const stringArr = JSON.stringify(arr);
  return stringArr[0] === '[' && stringArr[stringArr.length - 1] === ']';
}
const testInput = [0, 1, 2];
console.log(isArray(testInput));
console.log(isArray(35));

//2. joinArray()
// 2.1. arr.join
function joinArray(arr) {
  return arr.join('$');
}
console.log(joinArray(['orange', 'apple', 'grape']));

//3. find the index of a number
// 3.1. for loop
const findIndex = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) console.log(`Index of ${num} is ${i}`);
  }
};
console.log(findIndex([1, 2, 3, 4, 5], 5));
console.log(findIndex([1, 2, 3, 4, 5, 6], 2));

// 3.2. arr.forEach
const findIndex2 = (arr, num) => {
  let result;
  arr.forEach((item, index) => {
    if (item === num) {
      result = index;
    }
  });
  return `Index of ${num} is ${result}`;
};
console.log(findIndex2([1, 2, 3, 4, 5], 5));
console.log(findIndex2([1, 2, 3, 4, 5, 6], 2));

//4. & 5. get sum or product of an array
const getSum = (arr) => arr.reduce((sum, current) => sum + current, 0);
const getProduct = (arr) =>
  arr.reduce((product, current) => product * current, 1);
console.log(getSum([1, 2, 3, 4, 5]));
console.log(getSum([2, 7, 10]));
console.log(getProduct([1, 2, 3, 4, 5]));
console.log(getProduct([2, 3]));

//6. remove duplicate
const removeDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) arr.splice(i, 1);
    }
  }
  return arr;
};
console.log(removeDuplicate([1, 1, 2, 3, 7, 7, 0]));
console.log(removeDuplicate(['Peter', 'James', 'Bob', 'Peter']));

//7. find leap years
const findLeapYears = (a, b) => {
  let leapYears: number[] = [];
  for (let i = a; i <= b; i++) {
    if (i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)) leapYears.push(i);
  }
  return leapYears;
};
console.log(findLeapYears(2000, 2018));
console.log(findLeapYears(2013, 2015));

//8. find n-th index of fibonacci
const fibonacci = (n) => (n < 2 ? 1 : fibonacci(n - 2) + fibonacci(n - 1));
console.log(fibonacci(0));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
