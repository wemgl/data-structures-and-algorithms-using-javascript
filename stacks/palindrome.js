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

function isPalindrome(word) {
    var s = new Stack();
    var index;
    for (index = 0; index < word.length; index += 1) {
        s.push(word[index]);
    }

    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    
    return word === rword;
}

var word = "hello";
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
} else {
    print(word + " isn't a palindrome.");
}

word = "racecar";
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
} else {
    print(word + " isn't a palindrome.");
}


