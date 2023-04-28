class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = new Node(data);
        if (this.root == null) {
            this.root = node;
            return
        }
        let current = this.root;
        while (true) {
            if (current.data > data) {
                if (current.left == null) {
                    current.left = node;
                    break;
                } else {
                    current = current.left;
                }
            }
            if (current.data < data) {
                if (current.right == null) {
                    current.right = node;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
    }

    checkBST() {
        if(this.root==null)
        return "null"
        return this.checkBSTHelper(this.root, -Infinity, Infinity);
    }

    checkBSTHelper(current, minVal, maxVal) {
        if (current == null) {
            return true;
        }
        if (current.data <= minVal || current.data >= maxVal) {
            return "not BST";
        }
        return (
            this.checkBSTHelper(current.left, minVal, current.data) &&
            this.checkBSTHelper(current.right, current.data, maxVal)
        );
    }
}

let b = new Tree();
b.add(10);
b.add(20);
b.add(288);
b.add(-100);
b.add(26);
b.add(-12);
console.log(b.checkBST());
