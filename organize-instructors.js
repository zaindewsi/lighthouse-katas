const organizeInstructors = function(instructors) {
  const list = {}

  for (let i = 0; i < instructors.length; i++) {
    if (list[instructors[i].course]) {
      list[instructors[i].course].push(instructors[i].name)
    } else {
      list[instructors[i].course] = [instructors[i].name]
    }
  }
  return list
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));