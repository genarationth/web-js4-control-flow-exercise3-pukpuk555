let dayOfWeek = 7;

if (dayOfWeek === 0) {
  console.log("Sunday");
} else if (dayOfWeek === 1) {
  console.log("Monday");
} else if (dayOfWeek === 2) {
  console.log("Tuesday");
} else if (dayOfWeek === 3) {
  console.log("Wednesday");
} else if (dayOfWeek === 4) {
  console.log("Thursday");
} else if (dayOfWeek === 5) {
  console.log("Friday");
} else if (dayOfWeek === 6) {
  console.log("Saturday");
} else {
  console.log("We only have seven days a week. Create your day");
}

if (dayOfWeek === 0 || dayOfWeek === 6) {
  console.log("Weekend");
} else if (dayOfWeek > 0 && dayOfWeek < 6) {
  console.log("Weekday");
} else {
  console.log(" ");
}
