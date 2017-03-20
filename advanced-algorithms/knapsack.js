function max(a, b) {
    return (a > b) ? a : b;
}

var count = 0;
function knapsack(capacity, size, value, n) {
    count += 1;
    if (n === 0 || capacity === 0) {
        return 0;
    }

    if (size[n - 1] > capacity) {
        return knapsack(capacity, size, value, n - 1);
    } else {
        return max(value[n - 1] +
                knapsack(capacity - size[n - 1], size, value, n - 1),
                knapsack(capacity, size, value, n - 1));
    }
}

var dynamicCount = 0;
var dynamicKnapsack = (function () {
    var memo = [0];
    var knapsack = function (capacity, size, value, n) {
        dynamicCount += 1;
        if (n === 0 || capacity === 0) {
            return memo[0];
        }

        var result = memo[n];

        if (typeof result !== "number") {
            if (size[n - 1] > capacity) {
                result = knapsack(capacity, size, value, n - 1);
                memo[n] = result;
            } else {
                result = max(value[n - 1] + 
                        knapsack(capacity - size[n - 1], size, value, n - 1),
                        knapsack(capacity, size, value, n - 1));
                memo[n] = result;
            }
        }

        return result;

    };

    return knapsack;
}());

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
print(knapsack(capacity, size, value, n));
print("Count was: " + count);
print(dynamicKnapsack(capacity, size, value, n));
print("Dynamic Count was: " + dynamicCount);
