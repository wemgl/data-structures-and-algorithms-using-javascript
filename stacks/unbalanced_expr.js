function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
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

function isExprBalanced(expr) {
    var s = new Stack();
    
    var index;
    var pos = 0;
    
    for (index = 0; index < expr.length; index += 1) {
        if (expr[index] === "(") {
            s.push(expr[index]);
        } else if (expr[index] === ")") {
            s.pop();
        }
        pos++;
    }

    if (s.length() > 0) {
        return pos;
    } else {
        return -1;
    }
}

var expr = "2.3 + 23 / 12 + (3.14159 * 24";
print("Is expr " + expr + " unbalanced? " + isExprBalanced(expr));

expr = "2.3 + 23 / 12 + (3.14159 * 24)";
print("Is expr " + expr + " unbalanced? " + isExprBalanced(expr)); 

expr = "(2.3 + (23 / 12 + (3.14159 * 24))";
print("Is expr " + expr + " unbalanced? " + isExprBalanced(expr)); 

