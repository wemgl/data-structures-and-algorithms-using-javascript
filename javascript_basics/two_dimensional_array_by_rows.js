// var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]];
var total = 0;
var average = 0.0;
var row;
var col;
for (row = 0; row < grades.length; row += 1) {
    for (col = 0; col < grades[row].length; col += 1) {
        total += grades[row][col];
    }
    average = total / grades[row].length;
    print("Student: " + parseInt(row + 1) + " average: " + average.toFixed(2));
    total = 0;
    average = 0.0;
}
