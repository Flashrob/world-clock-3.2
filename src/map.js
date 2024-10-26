const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] + 1);
// }

const newArr = arr.map((number) => {
  return number + 1;
});

console.log(arr);
console.log(newArr);
