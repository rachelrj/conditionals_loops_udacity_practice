let hour = new Date().getHours();

if (hour < 12) {
  console.log("Good morning");
} else if (hour < 17) {
  console.log("Good day");
} else {
  console.log("Good evening");
}
