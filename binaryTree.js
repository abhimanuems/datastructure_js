class Node{
    constructor(data)
    {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class binarySearchTree{
    constructor()
    {
        this.root=null;
    }
    addNode(data)
    {
        const node=new Node(data)
        if(this.root==null)
        {
            this.root=node;
            return this.root
        }
        let current= this.root
        console.log(this.root.data)
        while(true)
        {
            if(current.data>data)
            {
                if(current.left==null)
                {
                    current.left=node;
                  return current.left
                }
                else
                {
                    current=current.left
                }
                
            }
            if (current.data < data) {
                if (current.right==null)
                {
                    current.right=node
                    return current.right
                }
                else
                {
                    current=current.right;
                }
                }
        }

    }
    contains(data)
    {
        let current=this.root
       while(current!=null)
       {
        if(current.data<data)
        {
            current=current.right
        }
        else if(current.data>data)
        {
            current=current.left
        }
        else
        {
            return "data founded "+data
        }
       }
       return "not found"
    }
    display()
    {
        return this
    }
   isValidBst(current){
    if(!current){
        return true;
    }
    if(current.left && current.left.data >current.data)
    {
        return false
    }
    if(current.right && current.right.data<current.data)
    {
        return false
    }
    return this.isValidBst(current.left) && this.isValidBst(current.right)

   }
}
let b=new binarySearchTree()
b.addNode(10)
b.addNode(20)
b.addNode(5)
b.addNode(6)
console.log(b.isValidBst(b.root))