const urlEncode = function(text) {
let encoded = "";

for(let i = 0; i < text.length; i++) {
  if (text[i] != " ") {
    encoded += text[i]
  } else if (text[i] === " " && i > 0 && i < text.length - 1) {
    encoded += "%20";
    } 
  } return encoded
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));