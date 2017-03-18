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

function createArr(file) {
    var arr = read(file).split("\n");
    var index;
    for (index = 0; index < arr.length; index += 1) {
        arr[index] = arr[index].trim();
    }
    return arr;
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            print(list.getElement().name + ", " + list.getElement().movie);
        } else {
            print(list.getElement());
        }
    }
}

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

function checkOut(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        return filmList.remove(movie);
    } else {
        print(movie + " is not available.");
        return false;
    }
}

var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
var rentals = new List();
var index;
for (index = 0; index < movies.length; index += 1) {
    movieList.append(movies[index]);
}

print("Available movies:\n");
displayList(movieList);
putstr("\nEnter your name: ");
var name = readline();
putstr("\nWhat move would you like? ");
var movie = readline();
var wasRemoved = checkOut(name, movie, movieList, customers);
if (wasRemoved) {
    rentals.append(movie);
}
print("\nCustomer Rentals:\n");
displayList(rentals);
print("\nMovies now available:");
displayList(movieList);
