function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
    this.buildChains = buildChains;
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
    this.table[pos].push(data);
}

function get(key) {
    var pos = this.betterHash(key);
    if (this.table[pos].length > 0) {
        return this.table[pos].filter(function (element) {
            return element === key;
        })[0];
    }
}

function showDistro() {
    var n = 0;
    var index;
    for (index = 0; index < this.table.length; index += 1) {
        if (this.table[index].length > 0) {
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

function buildChains() {
    var index;
    for (index = 0; index < this.table.length; index += 1) {
        this.table[index] = new Array();
    }
}

var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David","David","Jennifer", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var index;
for (index = 0; index < someNames.length; index += 1) {
    hTable.put(someNames[index], someNames[index]);
}
hTable.showDistro();
print("Key : Donnie has value: " + hTable.get("Donnie"));
print("Key : David has value: " + hTable.get("David"));
print("Key : Wembley has value: " + hTable.get("Wembley"));
