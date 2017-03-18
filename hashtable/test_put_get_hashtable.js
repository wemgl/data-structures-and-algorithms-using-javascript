function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}

function simpleHash(data) {
    var total = 0;
    var index;
    for (index = 0; index < data.length; index += 1) {
        total += data.charCodeAt(index);
    }
    return total % this.table.length;
}

function put(key, data) {
    var pos = this.betterHash(key);
    this.table[pos] = data;
}

function showDistro() {
    var n = 0;
    var index;
    for (index = 0; index < this.table.length; index += 1) {
        if (typeof this.table[index] !== "undefined") {
            print(index + ": " + this.table[index]);
        }
    }
}

function betterHash(string) {
    const H = 37;
    var total = 0;
    var index;
    for (index = 0; index < string.length; index += 1) {
        total = H * total + string.charCodeAt(index);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}

function get(key) {
    var hash = this.betterHash(key);
    return this.table[this.betterHash(key)];
}

var pnumbers = new HashTable();
var name;
var number;
var index;
for (index = 0; index < 3; index += 1) {
    putstr("Enter a name (space to quit): ");
    name = readline();
    putstr("Enter a number: ");
    number = readline();
    pnumbers.put(name, number);
}
name = "";
putstr("Name for number (Enter quit to stop): ");
while (name !== "quit") {
    name = readline();
    if (name === "quit") {
        break;
    }
    print(name + "'s number is " + pnumbers.get(name));
    putstr("Name for number (Enter quit to stop): ");
}
