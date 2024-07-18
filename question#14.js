// Q14 - Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// answer:
var myguest = ["sir ameen alam", "sir hamzah syed", "sir hamzah alvi"];
myguest.forEach(function (myguest) {
    console.log("hello sir, ".concat(myguest, ", would you like to dinner with me at my home. "));
});
