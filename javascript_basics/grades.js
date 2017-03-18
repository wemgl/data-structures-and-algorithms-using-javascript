function Grades() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(grade) {
    this.dataStore.push(grade);
}

function average() {
    var index;
    var total = 0.0;
    for (index = 0; index < this.dataStore.length; index += 1) {
        total += parseInt(this.dataStore[index]);
    }

    return total / this.dataStore.length;
}

var grades = new Grades();
grades.add(85);
grades.add(80);
grades.add(75);
grades.add(58);
grades.add(90);
print("The average is: " + grades.average());


