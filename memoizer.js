var memoizer = function (memo, formula) {
    var recur = function (n) {
        var result = memo[n];
        if (typeof result !== "number" ) {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

var factorial = memoizer([0,1], function (recur, n) {
    return n * recur(n - 1); 
});

console.log(factorial(5));

var fibonacci = memoizer([0,1], function (recur, n) {
    return recur(n - 1) + recur(n - 2); 
});

console.log(fibonacci(6));
