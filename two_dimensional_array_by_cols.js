var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0.0;
var row;
var col;
for (col = 0; col < grades.length; col += 1) {
    for (row = 0; row < grades[col].length; row += 1) {
        total += grades[row][col];
    }
    average = total / grades[col].length;
    print("Test: " + parseInt(col + 1) + " average: " + average.toFixed(2));
    total = 0;
    average = 0.0;
}
