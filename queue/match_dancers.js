function Queue() {
	this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
}

function enqueue(element) {
  this.dataStore.push(element);
}


function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  var retStr = "";
  var index;
  for (index = 0; index < this.dataStore.length; index += 1) {
    retStr += this.dataStore[index] + "\n";
  }
  return retStr;
}

function empty() {
  return this.dataStore.length === 0;
}

function count() {
  return this.dataStore.length;
}

function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
  this.toString = function () { return this.name; };
}


function getDancers(males, females) {
  var names = read("dancers.txt").split("\n");
  var index;
  for (index = 0; index < names.length; index += 1) {
    names[index] = names[index].trim();
  }

  for (index = 0; index < names.length; index += 1) {
    var dancer = names[index].split(" ");
    var sex = dancer[0];
    var name = dancer[1];
    if (sex === "F") {
      females.enqueue(new Dancer(name, sex));
    } else if (sex === "M") {
      males.enqueue(new Dancer(name, sex));
    }
  }
}

function dance(males, females) {
  print("The dance partners are: \n");
  var person;
  while (!females.empty() && !males.empty()) {
    person = females.dequeue();
    putstr("Female dancer is: " + person.name);
    person = males.dequeue();
    putstr(" and the male dancer is: " + person.name);
    print();
  }
  print();
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (femaleDancers.count() > 0) {
  print("There are " + femaleDancers.count() + " female dancers waiting to dance.");
}

if (maleDancers.count() > 0) {
  print("There are " + maleDancers.count() + " male dancers waiting to dance.");
}

