const urlDecode = function(text) {
  let decoded = {};
  let pair = text.split("&");

  for (let i = 0; i < pair.length; i++) {
    let key = pair[i].split("=");
    decoded[key[0]] = key[1].split("%20").join(" ");
  }
  return decoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
