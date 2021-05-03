const talkingCalendar = date => {
  date = date.split("/");
  let year = date[0];
  let month = date[1];
  let day = date[2];

  switch (month) {
  case "01":
    month = "January";
    break;
  case "02":
    month = "February";
    break;
  case "03":
    month = "March";
    break;
  case "04":
    month = "April";
    break;
  case "05":
    month = "May";
    break;
  case "06":
    month = "June";
    break;
  case "07":
    month = "July";
    break;
  case "08":
    month = "August";
    break;
  case "09":
    month = "September";
    break;
  case "10":
    month = "October";
    break;
  case "11":
    month = "November";
    break;
  case "12":
    month = "December";
    break;

  default:
    break;
  }

  if (date[2][0] === "0") {
    day = date[2][1];
  }
  if (day === "1") {
    day += "st";
  } else if (day === "2") {
    day += "nd";
  } else if (day === "3") {
    day += "3rd";
  } else {
    day += "th";
  }


  return month + " " + day + ", " + year;
  
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));