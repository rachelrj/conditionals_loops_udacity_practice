let prompt = require("prompt-sync")();
let selection = prompt("Select Y/N to continue. ");
while (
  selection.toLowerCase() !== "y" &&
  selection.toLowerCase() !== "n" &&
  selection.toLowerCase() !== "yes" &&
  selection.toLowerCase() !== "no"
) {
  selection = prompt("Invalid entry. Select Y/N to continue ");
}
console.log("Thank you");
