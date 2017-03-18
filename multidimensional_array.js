Array.matrix = function (numRows, numCols, initial) {
    var arr = [];
    var i;
    for (i = 0; i < numRows; i += 1) {
        var columns = [];
        var j;
        for (j = 0; j < numCols; j += 1) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}
