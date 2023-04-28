// tree binary
class Node{
    constructor(data)
    {
        this.data=data
        this.left=null
        this.right=null
    }
}
class Tree{
    constructor()
    {
        this.root=null
        this.size=0;
    }
    insert(data)
    {
        const node = new Node(data)

        if(this.root==null)
        {
            this.root=node;
            this.size++;
            return data+"added successfully"
           
        }
        let current= this.root
        while(true)
        {
            if(this.size%2==1)
           {
                if (current.left == null) {
                    current.left = node
                    this.size++
                    return "added left"
                }
                else {
                    current=current.left;
                }
           }
           else
           {
            if(current.right==null)
            {
                current.right=node
                this.size++
                return "added right"
            }
            else
            {
                current=current.right
            }
           }
        }
        

    }
}
const tree = new Tree()
console.log(tree.insert(100))
console.log(tree.insert(200))
console.log(tree.insert(300))
console.log(tree.insert(400))
console.log(tree.size)