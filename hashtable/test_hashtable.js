function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
}

function simpleHash(data) {
    var total = 0;
    var index;
    for (index = 0; index < data.length; index += 1) {
        total += data.charCodeAt(index);
    }
    return total % this.table.length;
}

function put(data) {
    var pos = this.betterHash(data);
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

var names = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hashtable = new HashTable();
var index;
for (index = 0; index < names.length; index += 1) {
    hashtable.put(names[index]);
}
hashtable.showDistro();
