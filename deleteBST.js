class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}
class binaryTree {
    constructor() {
        this.root = null
    }
    addNode(data) {
        const node = new Node(data)
        if (this.root == null) {
            this.root = node
        }
        else {
            let current = this.root;
            while (true) {
                if (current.data < data) {
                    if (current.right == null) {
                        current.right = node
                        break
                    }
                    else {
                        current = current.right;
                    }
                }
                else if (current.data > data) {
                    if (current.left == null) {
                        current.left = node
                        break;

                    }
                    else {
                        current = current.left
                    }
                }
            }
        }

    }

    deleteNode(data) {
        let current = this.root;
        this.deleteNodeHelper(current, data)
        return "deleted successfully"
    }
    deleteNodeHelper(current, data) {
        if (current == null) {
            return "nothing to delete";
        }
        if (current.data < data) {
            current.right = this.deleteNodeHelper(current.right, data);
        }
        else if (current.data > data) {
            current.left = this.deleteNodeHelper(current.left, data);
        }
        else {
            if (current.left == null) {
                let temp = current.right;
                current = null;
                return temp;
            }
            else if (current.right == null) {
                let temp = current.left;
                current = null;
                return temp;
            }
            let temp = this.findMin(current.right);
            current.data = temp.data;
            current.right = this.deleteNodeHelper(current.right, temp.data);
        }
        return current;
    }

    findMin(current) {
        let temp = current
        while (temp.left != null) {
            current = current.left
        }
        return current
    }

    postOrder() {
        this.postOrderHelper(this.root)
    }
    postOrderHelper(current) {
        if (current != null) {
            this.postOrderHelper(current.left)

            this.postOrderHelper(current.right)
            console.log(current.data)
        }
    }
    checkBTST()
    {
        let current=this.root;
        while(current!=null)
        {
            if(current.data>current.left)
            {
                current=current.left;
            }
            else
            {
                
            }
        }
    }
  
}
let b = new binaryTree()
b.addNode(10)
b.addNode(11)
b.addNode(8)
b.addNode(4)
b.addNode(9)

console.log("before deleting")
b.postOrder()
console.log("after deleting")
console.log(b.deleteNode(4))
console.log(b.deleteNode(10))
b.postOrder()
