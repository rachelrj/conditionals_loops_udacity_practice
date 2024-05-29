let hour = new Date().getHours();

hour < 12
  ? console.log("Good morning")
  : hour < 17
  ? console.log("Good afternoon")
  : console.log("Good evening");
