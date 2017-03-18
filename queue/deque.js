function Deque() {
	this.dataStore = [];
  this.enqueueLeft = enqueueLeft;
  this.enqueueRight = enqueueRight;
  this.dequeueLeft = dequeueLeft;
  this.dequeueRight = dequeueRight;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueueRight(element) {
  this.dataStore.push(element);
}

function enqueueLeft(element) {
  this.dataStore.unshift(element);
}

function dequeueLeft() {
  return this.dataStore.shift();
}

function dequeueRight() {
  return this.dataStore.splice(this.dataStore.length - 1, 1);
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

var d = new Deque();
d.enqueueLeft(8);
print(d.toString());
d.enqueueRight(6);
print(d.toString());
d.enqueueLeft(7);
print(d.toString());
d.enqueueLeft(5);
print(d.toString());
d.enqueueRight(3);
print(d.toString());
print("Remove items...");
d.dequeueLeft();
d.dequeueLeft();
print(d.toString());
d.dequeueRight();
d.dequeueRight();
print(d.toString());
