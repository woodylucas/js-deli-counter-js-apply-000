// Declare variable 
var katzDeliLine = [];

// create a function takeANumber

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
}

// create a function nowServing 

function nowServing( katzDeliLine ) {
  // create a conditional statement. 
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstPerson = katzDeliLine.shift(0);
    return firstPerson;
  }
}