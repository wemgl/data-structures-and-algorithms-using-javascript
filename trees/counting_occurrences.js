function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    this.count = 1;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
    this.update = update;
}

function update(data) {
    var node = this.find(data);
    node.count++;
    return node;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        putstr(node.show() + " ");
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (!(node == null)) {
        putstr(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        putstr(node.show() + " ");
    }
}

function getMin(current) {
    while (!(current.left == null)) {
        current = current.left;
    }

    return current;
}

function getMax(current) {
    while (!(current.right == null)) {
        current = current.right;
    }

    return current;
}

function find(data) {
    if (this.root == null) {
        return;
    }

    var current = this.root;
    while (current.data !== data) {
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }

        if (current == null) {
            return null;
        }
    }

    return current;
}

function remove(data) {
    this.root = this.removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }

    if (data === node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
            return null;
        }

        // node has no left children
        if (node.left == null) {
            return node.right;
        }

        // node has no right children
        if (node.right == null) {
            return node.left;
        }

        // node has two children
        var tempNode = this.getMin(node.right);
        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else {
        node.right = this.removeNode(node.right, data);
        return node;
    }
}

function prArray(arr) {
    putstr(arr[0].toString() + " ");
    var index;
    for (index = 1; index < arr.length; index += 1) {
        putstr(arr[index].toString() + " ");
        if (index % 10 === 0) {
            putstr("\n");
        }
    }
    print();
}

function genArray(length) {
    var arr = [];
    var index;
    for (index = 0; index < length; index += 1) {
        arr[index] = Math.floor(Math.random() * 101);
    }
    return arr;
}

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
var index;
for (index = 0; index < grades.length; index += 1) {
    var g = grades[index];
    var grade = gradedistro.find(g);
    if (grade == null) {
        gradedistro.insert(g);
    } else {
        gradedistro.update(g);
    }
}
var cont = "y";

while (cont === "y") {
    putstr("\n\nEnter a grade: ");
    var g = parseInt(readline());
    var aGrade = gradedistro.find(g);
    if (aGrade == null) {
        print("No occurrenes of " + g);
    } else {
        print("Occurrences of " + g + ": " + aGrade.count);
    }
    putstr("Look at another grade (y/n)? ");
    cont = readline();
}
