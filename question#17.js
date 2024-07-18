// Q17 - Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// answer:
var guestss = ["miss minaheel", "sir hamza syed", "sir zia"];
console.log("great news ! i found a bigger dinner table");
guestss.unshift("sir mudassir");
guestss.splice(guests.length / 2, 0, "sir asharaib ali");
guestss.push("sir bilal");
guestss.forEach(function (guest) {
    console.log("dear ".concat(guestss, ", would you like to join me for dinner"));
});
console.log("unfortunately, i can only invite two people for dinner.");
while (guestss.length > 2) {
    var removedGuest = guestss.pop();
    console.log("sorry, ".concat(removedGuest, ", i can invite you to dinner."));
}
guestss.forEach(function (guest) {
    console.log("dear ".concat(guest, ", you are still invited to dinner."));
});
guestss.splice(0, guestss.length);
console.log((guestss));
