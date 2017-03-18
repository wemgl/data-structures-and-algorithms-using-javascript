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
    this.table[pos] = data;
}

function get(key) {
    return this.table[this.betterHash(key)];
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

function buildChains() {
    var index;
    for (index = 0; index < this.table.length; index += 1) {
        this.table[index] = new Array();
    }
}
