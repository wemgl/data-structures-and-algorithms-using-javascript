var words = ["Archie", "Reggie", "Veronica", "Betty", "Jughead"];

words.forEach(function(element) {
    print(element);
});

var index;

for (index = words.length - 1; index >= 0; index -= 1) {
    print(words[index]);
}
