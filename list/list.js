
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
    this.insertIfLarger = insertIfLarger;
    this.insertIfSmaller = insertIfSmaller;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    var index;
    for (index = 0; index < this.dataStore.length; index += 1) {
        if (this.dataStore[index] === element) {
            return index;
        }
    }

    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }

    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }

    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    var index;
    for (index = 0; index < this.dataStore.length; index += 1) {
        if (this.dataStore[index] === element) {
            return true;
        }
    }

    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos >= 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos <= this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function insertIfLarger(element) {
    var index;
    for (index = 0; index < this.dataStore.length; index += 1) {
        if (element > this.dataStore[index]) {
            this.append(element);
            return index;
        } else {
            return -1;
        }
    }
}

function insertIfSmaller(element) {
    var index;
    for (index = 0; index < this.dataStore.length; index += 1) {
        if (element < this.dataStore[index]) {
            this.append(element);
            return index;
        } else {
            return -1;
        }
    }
}

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
print(names.getElement());

names.next();
print(names.getElement());

names.next();
names.next();
names.prev();
print(names.getElement());

print("Iterator example:");
for (names.front(); names.currPos() < names.length(); names.next()) {
    print(names.getElement());
}

print("Reverse iterator example:");
for (names.end(); names.currPos() >= 0; names.prev()) {
    print(names.getElement());
}

print(names.insertIfLarger("aaa"));
print(names.toString());