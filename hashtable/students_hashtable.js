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

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function generateStudentData(arr) {
    var index;
    for (index = 0; index < arr.length; index += 1) {
        var num = "";
        var j;
        for (j = 1; j <= 9; j += 1) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[index] = num;
    }
}

var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
generateStudentData(students);
print("Student data: \n");
var index;
for (index = 0; index < students.length; index += 1) {
    print(students[index].slice(0, 8) + " " +
            students[index].slice(9));
}
print("\n\nData distribution: \n");
var hTable = new HashTable();
for (index = 0; index < students.length; index += 1) {
    hTable.put(students[index]);
}
hTable.showDistro();
