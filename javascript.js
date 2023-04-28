// class Hashtable {
//     constructor(size) {
//         this.array = new Array(size)
//     }
//     _hash(key) {
//         var hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * 11) % this.array.length;

//         }
//         return hash;
//     }
//     set(key, value) {
//         let index = this._hash(key)
//         if (this.array[index] == null) {
//             this.array[index] = []
//         }
//         this.array[index].push([key, value]);
//         return this;
//     }
//     get(key) {
//         let index = this._hash(key)
//         if (this.array[index]) {
//             for (let i = 0; i < this.array[index].length; i++) {
//                 if (this.array[index][i][0] === key) {
//                     return key + ":" + this.array[index][i][1];
//                 }
//             }

//         }
//         else
//             return "no items "

//     }
//     display() {
//         for (let i = 0; i < this.array.length; i++) {
//             console.log(this.array[i]);
//         }
//     }
   

// }
// let obj = new Hashtable(9)
// obj.set("name", "abhimanue")
// obj.set("age", 26);
// obj.set("address", "door no 61 benagluru btmlayour")
// obj.set("job", "web devolper")
// obj.set("username", "abhimanuems")
// obj.set("password", "ABHImanue23041996")

// console.log(obj.get("age"))
// console.log(obj.get("address"))
// console.log(obj.get("password"))

//convert array into queue
// class Node{
//     constructor(data)
//     {
//         this.data=data
//         this.next=null;
//     }
// }
// class Queue{
//     constructor()
//     {
//         this.front=null;
//         this.rear=null;
//         this.size=0

//     }
//     convertArray(data)
//     {
//         const node=new Node(data)
//         if(this.rear==null)
//         {
//             this.rear=node
//             this.front=node
//         }
//         else
//         {
//          node.next=this.rear
//             this.rear=node
//         }
//         this.size++;

//     }
//     display()
//     {
//         let temp=this.rear
//         while(temp)
//         {
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
// }
// let arr=[1,2,3,4,5,6,7];
// let queue=new Queue()
// for(let i=0;i<arr.length;i++)
// {
//     queue.convertArray(arr[i])
// }
// queue.display()


// function quickSort(arr,start,end)
// {
//     if(start<end)
//     {
//         let index = pivotFunction(arr, start, end)
//         //left
//         quickSort(arr,index+1,end)
//         //right
//         quickSort(arr,start,index-1)
//     }
//     return arr;
   

// }
// function pivotFunction(arr,start,end)
// {
//     let pivot=start
//     let pivotElemnet=arr[start]
//     for(let i=start;i<end;i++)
//     {
//         if(pivotElemnet>arr[i])
//         {
//             pivot++;
//             let temp=arr[i]
//             arr[i]=arr[pivot]
//             arr[pivot]=temp

//         }
//     }
//     let temp =arr[pivot]
//     arr[pivot]=arr[start]
//     arr[start]=temp;
//     return pivot
// }
// let arr=[-1,100,-100,20,29,-09];
// let start=0;
// let end =arr.length
// console.log(quickSort(arr,start,end))
// function mergeSort(arr)
// {
//     if(arr.length<=1)
//     {
//         return arr;
//     }
//     let middle=Math.ceil(arr.length/2)
//     let firsthalf=arr.slice(0,middle)
//     let secondHalf=arr.slice(middle)
//     return join(mergeSort(firsthalf),mergeSort(secondHalf))
// }
// function join(firsthalf,secondHalf)
// {
//     let newArr=[]
//     let i=0,j=0;
//     while(i<firsthalf.length && j<secondHalf.length)
//     {
//         if(firsthalf[i]<secondHalf[j])
//         {
//             newArr.push(firsthalf[i])
//             i++;
//         }
//         else
//         {
//             newArr.push(secondHalf[j])
//             j++;
//         }
//     }
//     while(i<firsthalf.length)
//     {
//         newArr.push(firsthalf[i])
//         i++;
//     }
//     while(j<secondHalf.length)
//     {
//         newArr.push(secondHalf[j])
//         j++;
//     }
//     return newArr;

// }
// console.log(mergeSort([-19,-100,10,20,199,-1000]))
// function bubbleSort(arr)
// {
//     for(let i=arr.length-1;i>=0;i--)
//     {
//         for(let j=0;j<i;j++)
//         {
//             if(arr[j]>arr[j+1])
//             {
//                 let temp =arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([100,-10,200,-199]))

//selection sort
// function selectionSort(arr)
// {
   
   
//     for(let i=0;i<arr.length;i++)
//     {
//         let minimum=arr[i]
//         let index=i
//         for(let j=i+1;j<arr.length;j++)
//         {
//             if(minimum>arr[j])
//             {
//                 index=j
//                 minimum=arr[j]
//             }
//         }
//         if(i!=index)
//         {let temp =arr[i]
//             arr[i]=minimum
//             arr[index]=temp
//         }
//     }
//     return arr
// }
// console.log(selectionSort([-10,-100,20,1000,-1000]))


// function selectionSort(arr)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         let minimum=arr[i]
//         let index=i
//         for(let j=i+1;j<arr.length;j++)
//         {
//             if(minimum>arr[j])
//             {
//                 minimum=arr[j]
//                 index=j
//             }
//         }
//         if(index!=i)
//         {
//             let temp=arr[i]
//             arr[i]=minimum
//             arr[index]=temp
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([-100,-200,0,29,1000,-10000]))


// function insertionSort(arr)
// {
//     for(let i=1;i<arr.length;i++)
//     {
//         let arrayElement=arr[i]
//         let j=i-1;
//         while(arrayElement<arr[j]&& j>=0)
//         {
//             arr[j+1]=arr[j]
//             j--;
//         }
//         arr[j+1]=arrayElement
//     }
//     return arr;
// }
// console.log(insertionSort([-100, -200, 0, 29, 1000, -10000]))

// class Node{
//     constructor(key,value)
//     {
//         this.key=key
//         this.value=value
//         this.next=null;
//         this.prev=null;
//     }
// }
// class linkedlist{
//     constructor()
//     {
//         this.head=null
//         this.tail=null;
//         this.size=0
//     }
//     add(key,value)
//     {
//         const node=new Node(key,value)
//         if(this.head==null)
//         {
//             this.head=node
//             this.tail=node
//         }
//         else
//         {
//             this.tail.next=node
//             node.prev=this.tail
//             this.tail=node
//         }
//         this.size++;
//     }
//     delete(key)
//     {
//         if(this.head==null)
//         {
//             return "empty"
//         }
//         else if(this.size==1)
//         {
//             this.head=null
//             this.tail=null;
//         }
//         else
//         {
//             let current = this.head
//             while(current)
//             {
//              if(current.key==key)  {
//                 let previous=current.prev
//                 let nextnode=current.next;
//                 previous.next=nextnode
//                 nextnode.prev=previous
//                 current.next=null;
//                 current.prev=null;
//                 this.size--;
//                 return "delted successfully"
//              } 
//              current=current.next;
//             }
//         }
//     }
// }
// class Hashtable{
//     constructor()
//     {
//         this.size=11;
//         this.array=new Array(this.size)
//     }
//     _hash(key)
//     {
//         let index=0
//         for(let i=0;i<key.length;i++)
//         {
//             index+=key.charCodeAt(i)
//         }
//         return index%this.size
//     }
//     set(key,value)
//     {
//         let index=this._hash(key)
//         if(this.array[index]==null)
//         this.array[index]=new linkedlist()
//         this.array[index].add(key,value)
//         console.log(this.array[index])
//         return this.array[index]
        
//     }
// }
// let h=new Hashtable()
// h.set("name","abc")
// h.set("age", "26")
// h.set("aggg", "sbbs")
// function quickSort(arr,start,end)
// {
//     if(start<end)
//     {
//         let index = pivot(arr, start, end)
//         quickSort(arr, start = 0, index - 1)
//         quickSort(arr, index + 1, end)
//     }
//   return arr;


// }
// function pivot(arr,start,end)
// {
//     let index=start;
//     let pivotElemnet=arr[start]
//     for(let i=start;i<end;i++)
//     {
        
//             if(pivotElemnet>arr[i])
//             {
//                 index++;
//                 let temp=arr[index]
//                 arr[index]=arr[i]
//                 arr[i]=temp
//             }
//     }
//         let temp=arr[start]
//         arr[start]=arr[index]
//         arr[index]=temp;
    
//     return index
// }
// let arr=[1000,100,20,-100,100,299,-1]
// let start=0
// let end=arr.length
// console.log(quickSort(arr,start,end))


// class Node
// {
//     constructor(data)
//     {
//         this.data=data;
//         this.left=null;
//         this.right=null
//     }
// }
// class binaryTree{
//     constructor()
//     {
//         this.root=null
//     }
//     addNode(data)
//     {
//         const node=new Node(data)
//         if(this.root==null)
//         {
//             this.root=node
//         }
//         else
//         {
//             let current=this.root;
//            while(true)
//            {
//                if (current.data < data) {
//                 if(current.right==null)
//                 {
//                     current.right=node
//                     break
//                 }
//                 else
//                 {
//                     current=current.right;
//                 }
//                }
//                else if(current.data>data)
//                {
//                 if(current.left==null)
//                 {
//                     current.left=node
//                     break;

//                 }
//                 else
//                 {
//                     current=current.left
//                 }
//                }
//            }
//         }

//     }
//     inOrder()
//     {
//         this.inOrderHelper(this.root)
//     }
//     inOrderHelper(current)
//     {
//         if(current!=null)
//         {
//             this.inOrderHelper(current.left)
//             console.log(current.data)
//             this.inOrderHelper(current.right)
//         }
//     }
//     preOrder()
//     {
//         this.preOrderHelper(this.root)
//     }
//     preOrderHelper(current)
//     {
//         if(current!=null)
//         { 
//             console.log(current.data)
//             this.preOrderHelper(current.left)
//             this.preOrderHelper(current.right)
//         }
//     }
//     postOrder()
//     {
//      this.postOrderHelper(this.root)
//     }
//     postOrderHelper(current)
//     {
//         if(current!=null)
//         {
//             this.postOrderHelper(current.left)
         
//             this.postOrderHelper(current.right)
//             console.log(current.data)
//         }
//     }
//     display()
//     {
//         return this
//     }
// }
// let b=new binaryTree()
// b.addNode(10)
// b.addNode(11)
// b.addNode(8)
// b.addNode(4)
// b.addNode(9)
// // b.inOrder()
// // b.inOrder()
// // b.preOrder()
// b.postOrder()


class MinHeap{
    constructor()
    {
        this.values=[]
    }
    insertElements(element)
    {
        this.values.push(element)
        this.bubbleUp();
    }
    bubbleUp()
    {
        
    }
}

