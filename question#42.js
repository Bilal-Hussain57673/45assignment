// Q42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// answer:
var magiciann = ["nana bangali", "savitree maii", "bihari pandit"];
function showMagiciann(magiciann) {
    magiciann.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magiciann) {
    for (var i = 0; i < magiciann.length; i++) {
        magiciann[i] = magiciann[i] +
            " the great";
    }
}
makeGreat(magiciann);
showMagiciann(magiciann);
