import Tamagotchi from "./utils/tamagotchi.js";
// tenative attempt at time tracking for tamagotchi functions
let secondsElapsed = 0;
let minutesElapsed = 0;
let timeInterval = 1000;

setInterval(() => {
  secondsElapsed++;
  if (secondsElapsed % 60 === 0) {
    minutesElapsed++;
  }
}, timeInterval);

let test = new Tamagotchi("test");
console.log(test);
