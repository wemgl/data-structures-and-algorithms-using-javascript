function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
    this.toString = toString;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

function toString() {
    return this.dataStore;
}

Array.prototype.contains = function(n) {
    var index;

    for (index = 0; index < this.length; index += 1) {
        if (this[index] === n) {
            return true;
        }
    }

    return false;
}

function evalPostfixExpr(expr) {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var operators = new Stack();
    var operands = new Stack();

    var index;

    for (index = 0; index < expr.length; index += 1) {
        if (expr[index] === " ") {
            continue;
        }

        if (nums.contains(parseInt(expr[index]))) {
            operands.push(expr[index]);
        } else {
            operators.push(expr[index]);
            var result = calc(operators, operands);
            operands.push(result);
        }
    }

    return operands.pop();
}

function calc(operators, operands) {
    var second = operands.pop();
    var op = operators.pop();
    var first = operands.pop();

    var x = first + op + second;
    print(x);
    return eval(x);
}

var expr = "2 3 +";
print("The answer to " + expr + " is " + evalPostfixExpr(expr));

expr = "7 8 + 3 2 + /";
print("The answer to " + expr + " is " + evalPostfixExpr(expr));
