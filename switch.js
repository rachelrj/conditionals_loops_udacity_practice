const prompt = require("prompt-sync")();
let trafficLight = prompt("What is the color of the traffic light? ");
let message;

switch (trafficLight) {
  case "red":
    message = "Stop immediately.";
    break;
  case "yellow":
    message = "Prepare to stop.";
    break;
  case "green":
    message = "Proceed or continue driving.";
    break;
  default:
    message = "Invalid traffic light color.";
    break;
}
console.log(message);
