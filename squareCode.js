const squareCode = function(message) {
  const string = message.replace(/\s/g, "");
  const column = Math.ceil(Math.sqrt(string.length));

  let square = [];
  for (let i = 0; i < column; i++) {
    square.push(string.slice(column * i, column + column * i));
  }

  let squareCode = "";
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < column; j++) {
      if (square[j][i] !== undefined) squareCode += square[j][i];
    }
    squareCode += " ";
  }
  return squareCode;
};

console.log(squareCode("chill out")); // clu hlt io
console.log(squareCode("feed the dog")); // fto ehg ee dd
console.log(squareCode("have a nice day")); // hae and via ecy
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
); // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
