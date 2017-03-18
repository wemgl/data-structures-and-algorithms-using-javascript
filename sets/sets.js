function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        if (this.dataStore.length === 0) {
            this.dataStore.push(data);
            return true;
        }
        var index = 1;
        while (data > this.dataStore[index]) {
            index += 1;
        }
        this.dataStore.splice(index, 0, data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var index = this.dataStore.indexOf(data);
    if (index > 0) {
        this.dataStore.splice(index, 1);
        return true;
    } else {
        return false;
    }
}

function show() {
    return this.dataStore;
}

function contains(data) {
    return this.dataStore.indexOf(data) > -1;
}

function union(set) {
    var tmpSet = new Set();
    var index;
    for (index = 0; index < this.dataStore.length; index += 1) {
        tmpSet.add(this.dataStore[index]);
    }

    for (index = 0; index < set.dataStore.length; index += 1) {
        if (!tmpSet.contains(set.dataStore[index])) {
            tmpSet.dataStore.push(set.dataStore[index]);
        }
    }

    return tmpSet;
}

function intersect(set) {
    var tmpSet = new Set();
    var index;
    for (index = 0; index < this.dataStore.length; index += 1) {
        if (set.contains(this.dataStore[index])) {
            tmpSet.add(this.dataStore[index]);
        }
    }
    return tmpSet;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    }

    var index;
    for (index = 0; index < this.dataStore.length; index += 1) {
        if (!set.contains(this.dataStore[index])) {
            return false;
        }
    }

    return true;
}

function size() {
    return this.dataStore.length;
}

function difference(set) {
    var tmpSet = new Set();
    var index;
    for (index = 0; index < this.dataStore.length; index += 1) {
        if (!set.contains(this.dataStore[index])) {
            tmpSet.add(this.dataStore[index]);
        }
    }
    return tmpSet;
}

// test program
var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = cis.difference(it);
print("[" + cis.show() + "] difference [" + it.show()
        + "] -> [" + diff.show() + "]");
