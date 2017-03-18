function Queue() {
	this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element);
}


function dequeue() {
  var next = 0; 
  var index;
  for (index = 0; index < this.dataStore.length; index += 1) {
    if (this.dataStore[index].code < this.dataStore[next].code) {
     next = index; 
    }
  }
  return this.dataStore.splice(next, 1);
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
    retStr += this.dataStore[index].name + " code: " +
      this.dataStore[index].code + "\n";
  }
  return retStr;
}

function empty() {
  return this.dataStore.length === 0;
}

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ");
print(ed.toString());
// another round
seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ");
print(ed.toString());
seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ");
print(ed.toString());
