const prompt = require('prompt-sync')();

function greet(namePassedIn) {
  return 'Welcome to SALT, ' + namePassedIn;
}

function courseDate(datePassedIn) {
  const array = datePassedIn.split('-');
  const courseDate = new Date(array[0], array[1] - 1, array[2], 8, 30);
  const todaysDate = new Date();
  
  const timeDiff = courseDate.getTime() - todaysDate.getTime();

  const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  
  return "Today it is " + dayDiff + " days left until the course starts";
}

// Main program
const name = prompt('What is your name? ');
const course = prompt("When does the course start [YYYY-MM-DD]? ");
const greeting = greet(name);
const courseStarts = courseDate(course);
console.log(greeting);
console.log(courseStarts);


module.exports.greet = greet;