class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.middle = null;
        this.data = data;
    }
}
class TernaryTree {
    constructor() {
        this.root = null;

    }
    addNode() {
        for (let i = 0; i < 10; i++) {
            this.add(Math.floor(Math.random() * 100))
        }
    }
    add(data) {
        const node = new Node(data)
        if (this.root == null) {
            this.root = node
            return
        }
        let current = this.root
        while (true) {
            if (current.left == null) {
                current.left = node
                return
            }
            else {
                current = current.left
            }
            if (current.middle == null) {
                current.middle = node
                return
            }
            else {
                current = current.middle
            }
            if (current.right == null) {
                current.right = node
                return
            }
            else {
                current = current.right
            }
        }
    }
    display() {
        this.displayHelper(this.root)
    }
    displayHelper(current) {
        if (current != null) {
            this.displayHelper(current.left)
            this.displayHelper(current.right)
            this.displayHelper(current.middle)
            console.log(current.data)
        }
    }
}
let three = new TernaryTree()

three.addNode()
three.display()
console.log(three.root)