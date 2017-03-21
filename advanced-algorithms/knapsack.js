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
        var result = memo[n];

        if (typeof result !== "number") {
            if (n === 0 || capacity === 0) {
                return memo[0];
            }

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

var n = 5;
var values = [];
var index;
for (index = 0; index < n; index += 1) {
    values.push(Math.floor(Math.random() * (n + 1)));
}
var value = values;
print("value: " + values);

var sizes = [];
var index;
for (index = 0; index < n; index += 1) {
    sizes.push(Math.floor(Math.random() * (n + 1)));
}
var size = sizes;
print("size: " + sizes);

var capacity = 20;

print(knapsack(capacity, size, value, n));

print("Count was: " + count);
print(dynamicKnapsack(capacity, size, value, n));

print("Dynamic Count was: " + dynamicCount);
