function Deque() {
	this.dataStore = [];
  this.enqueueLeft = enqueueLeft;
  this.enqueueRight = enqueueRight;
  this.dequeueLeft = dequeueLeft;
  this.dequeueRight = dequeueRight;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.length = length;
}

function enqueueRight(element) {
  this.dataStore.push(element);
}

function enqueueLeft(element) {
  this.dataStore.unshift(element);
}

function dequeueLeft() {
  return this.dataStore.shift();
}

function dequeueRight() {
  return this.dataStore.splice(this.dataStore.length - 1, 1)[0];
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  var retStr = "[";
  var index;
  for (index = 0; index < this.dataStore.length; index += 1) {
    retStr += this.dataStore[index] + ", ";
  }
  return retStr.slice(0, retStr.length - 2).concat("]");
}

function empty() {
  return this.dataStore.length === 0;
}

function length() {
  return this.dataStore.length;
}

function isPalindrome(word) {
  var d = new Deque();
  var index;
  for (index = 0; index < word.length; index += 1) {
    d.enqueueRight(word[index]);
  }

  var left;
  var right;
  while (!d.empty()) {
    left = d.dequeueLeft();
    right = d.dequeueRight();

    if (left && right && left !== right) {
      return false;
    }
  }
  
  return true;
}
  
var word = "racecar";
print("Is " + word + " a palindrome? " + isPalindrome(word));
word = "noon";
print("Is " + word + " a palindrome? " + isPalindrome(word));
word = "wembley";
print("Is " + word + " a palindrome? " + isPalindrome(word));
word = "whittney";
print("Is " + word + " a palindrome? " + isPalindrome(word));
