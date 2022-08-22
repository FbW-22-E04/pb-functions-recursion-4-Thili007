// Write your code here:

const fibonacci = (num) => {
  if (num == 0) {
    return [0];
  } else if (num <= 1) {
    return [0, 1];
  } else if (num <= 3) {
    return [0, 1, 1, 2];
  } else {
    var output = fibonacci(num - 1);
    output.push(output[num - 1] + output[num - 2]);
    return output;
  }
};

console.log(fibonacci(0)); // [0]
console.log(fibonacci(1)); // [ 0, 1 ]
console.log(fibonacci(3)); // [ 0, 1, 1, 2 ]
console.log(fibonacci(8)); // [ 0, 1,  1,  2, 3, 5, 8, 13, 21]
console.log(fibonacci(11)); //[ 0,  1,  1,  2,  3,5,  8, 13, 21, 34,55, 89]
