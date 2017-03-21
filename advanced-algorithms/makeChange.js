// Greedy programming algorithm

function makeChange(originalAmount) {
    var change = [];
    var remaining = 0;

    if (originalAmount % .25 < originalAmount) {
        change[3] = parseInt(originalAmount / .25);
        remaining = originalAmount % .25;
        originalAmount = remaining;
    }

    if (originalAmount % .10 < originalAmount) {
        change[2] = parseInt(originalAmount / .10);
        remaining = originalAmount % .1;
        originalAmount = remaining;
    }

    if (originalAmount % .05 < originalAmount) {
        change[1] = parseInt(originalAmount / .05);
        remaining = originalAmount % .05;
        originalAmount = remaining;
    }

    change[0] = parseInt(originalAmount / .01);

    return change;
}

function showChange(change) {
    if (change[3] > 0) {
        print(change[3] + " quarters");
    }

    if (change[2] > 0) {
        print(change[2] + " dimes");
    }

    if (change[1] > 0) {
        print(change[1] + " nickles");
    }

    if (change[0] > 0) {
        print(change[0] + " pennies");
    }
}

var original = .63;
var change = makeChange(original);
showChange(change);
