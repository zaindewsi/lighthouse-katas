const sumLargestNumbers = function(data) {
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] > num1) {
      num1 = data[i];
    }
  }

  for (let j = 0; j < data.length; j++) {
    if (data[j] >= num2 && data[j] < num1) {
      num2 = data[j];
    }
  }

  let sum = num1 + num2;
  return sum;
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));