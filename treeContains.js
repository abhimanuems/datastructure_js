class Node
{
    constructor(data)
    {
        this.data=data
        this.left=null;
        this.right=null;
    }
}
class Tree{
    constructor()
    {
        this.root=null;
    }
    add(data)
    {
        const node = new Node(data)
        if(this.root==null)
        {
            this.root=node
            return "added at root"
        }
        let current=this.root
        while(true)
        {
            let currentdata=current.data
            if(currentdata>data)
            {
                if(current.left==null)
                {
                    current.left=node
                    return "added at left"
                }
                else
                {
                    current=current.left
                }
                
            }
           
            if(currentdata<data)
            {
                if(current.right==null)
                {
                    current.right=node
                    return "added at right"
                }
                else
                {
                    current=current.right
                }
            }
        }

    }
    display()
    {
        return this
    }
    contains(data)
    {
        let current=this.root;
       while(current!=null)
       {
           if (current.data > data) {
               current = current.left;
           }
           else if (current.data < data) {
               current = current.right;
           }
           else {
               return current.data +" is found"
           }
       }
       return "not found"
    }
}
const tree= new Tree()
tree.add(100)
tree.add(90)
tree.add(110)
console.log(tree.contains(1002))
console.log(tree.display())
