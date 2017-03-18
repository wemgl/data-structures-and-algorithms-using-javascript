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
       print(keys[key] + " -> " + this.datastore[keys[key]]);
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

var pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
print("Number of entries: " + pbook.count());
print("David's extension: " + pbook.find("David"));
pbook.showAll();
pbook.clear();
print("Number of entries: " + pbook.count());

