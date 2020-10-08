// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  constructor(name, breed) {
    this.species = "cat";
    this.tiredness = 50;
    this.hunger = 100;
    this.loneliness = 100;
    this.happiness = 50;
    this.name = name;
    this.breed = breed;
  }

  eat = (numberOfKibbles) => {
    this.hunger = this.hunger - 0.2 * numberOfKibbles; //80
    this.happiness = this.happiness + 0.5 * numberOfKibbles; //100
  };

  sleep = (hoursOfSleep) => {
    this.tiredness = this.tiredness - 5 * hoursOfSleep; //0
    this.happiness = this.happiness + hoursOfSleep; //110
  };

  play = (minutesOfPlay) => {
    this.loneliness = this.loneliness - 3 * minutesOfPlay; //70
    this.happiness = this.happiness + minutesOfPlay; //120
  };

  wait = (numberOfMinutes) => {
    this.tiredness = this.tiredness + 0.5 * numberOfMinutes; //10
    this.hunger = this.hunger + 0.3 * numberOfMinutes; //86
    this.loneliness = this.loneliness + numberOfMinutes; //90
    this.happiness = this.happiness - 0.5 * numberOfMinutes; //110
  };
}

let boots = new Cat("Boots", "Siamese");
boots.sleep(10);
boots.eat(100);
boots.play(10);
boots.wait(20);

console.log(boots.happiness);
