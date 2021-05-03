const titleCase = (text) => {
  if (text.length === 0) {
    return "";
  }
  let words = text.toLowerCase().split(" ");

  let title = "";

  for (let word of words) {
    let newWord = word[0].toUpperCase() + word.slice(1);

    title += newWord + " ";
  }
  return title.trim();
};

console.log(titleCase("this is an example"));
console.log(titleCase("test"));
console.log(titleCase("i r cool"));
console.log(titleCase("WHAT HAPPENS HERE"));
console.log(titleCase(""));
console.log(titleCase("A"));
