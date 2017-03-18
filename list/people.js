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


function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.showByGender = showByGender;
    this.toString = toString;
}

function toString() {
    return this.name;
}
function showByGender(people, gender) {
    return people.filter(function (element) {
        return element.gender === gender;
    })
}

var people = [];
people.push(new Person("Archie", "M"),
    new Person("Reggie", "M"),
    new Person("Veronica", "F"),
    new Person("Betty", "F"),
    new Person("Jughead", "M"));

print(showByGender(people, "M"));
print(showByGender(people, "F"));
