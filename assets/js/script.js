function getCurrentDateTime() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  day = day < 10 ? "0" + day : day;
  month = list[month - 1];
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  var amPM = hours >= 12 ? "PM" : "AM";

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours == 0 ? 12 : hours;

  var dateFormatted = day + "/" + month + "/" + year;
  var timeFormatted = hours + ":" + minutes + " " + amPM;

  var wochentag = currentDate.getDay();

  if (wochentag === 0 || wochentag === 6) {
    daycheck = "Weekend";
  } else {
    daycheck = "Arbeitstag";
  }

  return dateFormatted + " " + timeFormatted + " " + daycheck;
}
document.getElementById("currentDateTime").textContent = getCurrentDateTime();
