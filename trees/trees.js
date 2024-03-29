function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
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


var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.insert(4);
nums.insert(21);
inOrder(nums.root);
print("\n");
nums.remove(3);
inOrder(nums.root);
print("\n");
