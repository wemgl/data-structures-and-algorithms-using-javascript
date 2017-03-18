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
    for (key in Object.keys(this.datastore)) {
        print(key + " -> " + this.datastore[key]);
    }
}

function count() {
    var n = 0;
    var key;
    for (key in Object.keys(this.datastore)) {
        ++n;
    }

    return n;
}

function clear() {
    var key;
    for (key in Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

