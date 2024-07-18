// Q41 - Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// answer:
var magicians = ["nana bangali", "savitree maii", "bihari pandit"];
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
showMagicians(magicians);
