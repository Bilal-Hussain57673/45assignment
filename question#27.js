"use strict";
// Q27 - Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
//answer:
var alienColors = "grey";
// green alien version
alienColors = "green";
if (alienColors == "green") {
    console.log("green earned 5 points");
}
else if (alienColors == "yellow ") {
    console.log("yellow earned 10 points");
}
else if (alienColors == "red") {
    console.log("red earned 15 points");
}
// yellow allien verion
alienColors = "yellow";
if (alienColors == "green") {
    console.log("green earned 5 points");
}
else if (alienColors == "yellow") {
    console.log("yellow earned 10 points");
}
else if (alienColors == "red") {
    console.log("red earned 15 points");
}
// red alien version
alienColors = "red";
if (alienColors == "green") {
    console.log("green earned 5 points");
}
else if (alienColors == "yellow ") {
    console.log("yellow earned 10 points");
}
else if (alienColors == "red") {
    console.log("red earned 15 points");
}
