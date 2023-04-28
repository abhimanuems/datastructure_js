class Node{
    constructor(data)
    {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class Tree{
    constructor()
    {
        this.root=null;
    }
    addChild(data)
    {
        const node = new Node(data)
        if(this.root==null)
        {
            this.root=node
            return;
        }
        if(this.left==null)
        {
         this.root.left=node;   
         return " added left"
        }
        else
        {
            this.root.right=node
            return "added right"
        }

    }
    display()
    {
        let current = this.root
        console.log("left of the tree")
        while(current)
        {
            console.log(current.data)
            current=current.left
        }
        return this
    }
}
let tree= new Tree();
tree.addChild(10);
tree.addChild(20);
tree.addChild(30);
console.log(tree.display())