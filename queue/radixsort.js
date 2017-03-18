function Queue() {
	this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element);
}


function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  var retStr = "";
  var index;
  for (index = 0; index < this.dataStore.length; index += 1) {
    retStr += this.dataStore[index] + "\n";
  }
  return retStr;
}

function empty() {
  return this.dataStore.length === 0;
}

function distribute(nums, queues, n, digit) { // digit represents either the 1s
                                              // or the 10s place
  var index;
  for (index = 0; index < n; index += 1) {
    if (digit === 1) {
       queues[nums[index] % 10].enqueue(nums[index]);
    } else {
       queues[Math.floor(nums[index] / 10)].enqueue(nums[index]);
    }
  }
}

function collect(queues, nums) {
  var index = 0;
  var digit;
  for (digit = 0; digit < 10; digit += 1) {
    while (!queues[digit].empty()) {
      nums[index++] = queues[digit].dequeue();
    }
  }
}

function dispArray(arr) {
  var index;
  for (index = 0; index < arr.length; index += 1) {
    print(arr[index] + " ");
  }
}

// main program
var queues = []
var index;
for (index = 0; index < 10; index += 1) {
  queues[index] = new Queue();
}

var nums = [];
for (index = 0; index < 10; index += 1) {
  nums[index] = Math.floor(Math.floor(Math.random() * 101));
}

print("Before radix sord: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
print("\n\nAfter radix sort: ");
dispArray(nums);
