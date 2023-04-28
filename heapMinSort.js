class heapMinSort{
    constructor()
    {
        this.array=new Array()
        this.heapSort=[];
    }
    insertElement(data)
    {
        this.array.push(data)
        this.bubbleUp();

    }
    bubbleUp()
    {

        let index=this.array.length-1;
        let parent;
        while(index>0)
        {
            parent=Math.floor((index-1)/2);
            if(this.array[index]<this.array[parent])
            {
                [this.array[index],this.array[parent]] = [this.array[parent],this.array[index]];
            }
            else
            {
                break;
            }
            index=parent;
        }
    }
    delete()
    {
        let length=this.array.length-1;
        [this.array[length],this.array[0]] = [this.array[0],this.array[length]];
        let popped=this.array.pop();
        this.heapSort.push(popped);
        this.sinkUp();

    }
    deleteHelper()
    {
        for(let i=0;i<this.array.length;i++)
        {
            this.delete();
        }
        if(this.array.length)
        {
            this.heapSort=[...this.heapSort,...this.array];
        }
    }
    sinkUp()
    {

        let node=0;
        let leftChild,rightChild;
        while(node<this.array.length)
        {
            rightChild=2*node+2;
            leftChild=node*2+1;
           
            if(this.array[node]>this.array[rightChild] || this.array[leftChild] < this.array[node])
            {
                if(this.array[leftChild] < this.array[rightChild])
                {
                    [this.array[node],this.array[leftChild]] = [this.array[leftChild],this.array[node]];
                    node=leftChild;
                }
                else
                {
                    [this.array[node],this.array[rightChild]] = [this.array[rightChild] , this.array[node]];
                    node =rightChild
                }
            }
            else
                if (rightChild >= this.array.length) {
                    return
                }
            break;

        }
    }
}
let h= new heapMinSort()
h.insertElement(100)
h.insertElement(20)
h.insertElement(40)
h.insertElement(-199)
h.insertElement(1000)
h.deleteHelper()
console.log(h.heapSort);