//declare a variable 
var katzDeliLine = [];
// create a function with two parameters
function takeANumber(katzDeliLine, name ) {
  // added name with a push method.
  
  katzDeliLine.push(name);
  
  // return with concatenation 

  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
  
}

// create function nowServing 

function nowServing(katzDeliLine) {
  // conditional statment 
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    // create a variable firstName to remove first variable. 
    var firstName = katzDeliLine.shift(0);
    return "Currently serving " + firstName + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    return "The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2];
  }
}