class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
    this.alive = true;
  }
  feed() {
    this.hunger--;
  }
  sleep() {
    this.sleepiness--;
  }
  play() {
    this.boredom--;
  }
  ageUp() {
    this.age++;
  }
  die() {
    console.log("Your Tamagotchi has died!");
    this.alive = false;
  }
}

export default Tamagotchi;
