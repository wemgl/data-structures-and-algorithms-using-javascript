function Dictionary() {
   this.datastore = new Array();
   this.add = add;
   this.find = find;
   this.remove = remove;
   this.showAll = showAll;
   this.count = count;
   this.clear = clear;
}

function add(key, value) {
   this.datastore[key] = value;
}

function find(key) {
   return this.datastore[key];
}

function remove(key) {
   delete this.datastore[key];
}

function showAll() {
   var key;
   var keys = Object.keys(this.datastore).map(function (element) { return new String(element); }).sort();
   for (key in keys) {
       if (this.datastore[keys[key]] == null) {
           continue;
       }
       print(keys[key] + ": " + this.datastore[keys[key]]);
   }
}

function count() {
  var n = 0;
  var key;
  for (key in this.datastore) {
    ++n;
  }
  return n;
}

function clear() {
  var key;
  for (key in this.datastore) {
    delete this.datastore[key];
  }
}

function open(file) {
    var text = read(file).split("\n").filter(function (line) { return line.length > 0; });
    var index;
    var dict = new Dictionary();
    for (index = 0; index < text.length; index += 1) {
        var words = text[index].trim().split(" ");
        for (word in words) {
            if (typeof dict.find(words[word]) === "undefined") {
                dict.add(words[word], 1);
            } else {
                var count = parseInt(dict.find(words[word])) + 1;
                dict.add(words[word], count);
            }
        }
    }
    return dict;
}

// main program
var words = open("words.txt");
words.showAll();
