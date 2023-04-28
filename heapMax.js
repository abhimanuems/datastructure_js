class maxHeap{
    constructor()
    {
        this.array=new Array();
    }
    insertElement(element)
    {
        this.array.push(element);
        this.bubbleUp();
    }
    bubbleUp()
    {
        let index = this.array.length - 1;

        while (index > 0) {
            let parentIndx = Math.floor((index - 1) / 2)
            if (this.array[parentIndx] < this.array[index]) {
                [this.array[parentIndx], this.array[index]] = [this.array[index], this.array[parentIndx]];
            }
            else {
                break;
            }
            index = parentIndx;
        }
    }
    delete()
    {
        if(this.array.length==0) return "empty Heap nothing to delete"
        let length=this.array.length-1;
        [this.array[length],this.array[0]] = [this.array[0],this.array[length]]
        this.array.pop();
        this.sinkDown()
    }
    sinkDown()
    {
        let node=0;
        let rightChild;
        let leftChild;
        while(node <this.array.length-1)
        {
            rightChild = 2*node+2;
            leftChild = 2*node+1
            if(this.array[node] < this.array[leftChild] || this.array[node] < this.array[rightChild])
            {
                if(this.array[rightChild] > this.array[leftChild])
                {
                    [this.array[node],this.array[rightChild]] = [this.array[rightChild],this.array[node]];
                    node = rightChild;
                }
                else
                {
                    [this.array[node],this.array[leftChild]] = [this.array[leftChild],this.array[node]];
                    node = leftChild;
                }
            }
            else
            {
                break;
            }
        }
    }
    
}
let maxheap=new maxHeap()
maxheap.insertElement(10)
maxheap.insertElement(20)
maxheap.insertElement(-100)
maxheap.insertElement(1011)
maxheap.insertElement(0)
maxheap.insertElement(277)
console.log("Elements in the heap");
console.log(maxheap.array)
console.log("After deleting the max value from the heap :")
maxheap.delete()
console.log(maxheap.array);
