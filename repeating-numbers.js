const repeatNumbers = function(data) {
  const output = [];

  for (let i = 0; i < data.length; i++) {
    let repeat = "";

    for (let j = 0; j < data[i][1]; j++) {
      repeat += data[i][0];
    }
    output.push(repeat);
  }
  return output.join(", ")
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));