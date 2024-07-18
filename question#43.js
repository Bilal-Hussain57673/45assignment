// Q43 - Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// answer:
var magiciannn = ["nana bangali", "savitree maii", "rana bhagwan dass"];
function MakeGreat(magiciannn) {
    var greatMagician = [];
    magiciannn.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the great"));
    });
    return greatMagicians;
}
function showMagiciann(magiciannn) {
    magiciannn.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = MakeGreat(magiciannn.slice());
console.log("original magicians:");
showMagiciann(magiciannn);
console.log("great magician:");
showMagiciann(greatMagicians);
