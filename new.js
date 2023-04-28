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
//         this.rear=null;
//         this.front=null
//         this.size=0
//     }
//     enqueue(data)
//     {
//         const node=new Node(data)
//         if(this.rear==null)
//         {
//             this.rear=node
//             this.front=node
//         }
//         else
//         {
//             node.next=this.rear
//             this.rear=node;
//         }
//         this.size++
//     }
//     dequeue()
//     {
//         if(this.rear==null)
//         {
//             return "nothing in the queue"
//         }
//         else if(this.front==this.rear)
//         {
//             this.front=null
//             this.rear=null;
//             return this.front + "  "+this.rear
//         }
//         else
//         {
//             let temp=this.rear;
//          for(let i=1;i<this.size-1;i++)
//          {
//             temp=temp.next
//          } 
//          let current = temp;
//          temp.next=null;
//          this.front=temp;
//          return current  
//         }
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
// let queue= new Queue()
// let arr=[1,2,3,4,5]
// for(let i=0;i<arr.length;i++)
// {
//     queue.enqueue(arr[i])
// }

// console.log(queue.dequeue())
// queue.display()


// hashtbale
// class hashTable
// {
//     constructor(size)
//     {
//         this.size=size
//         this.array=new Array(size)
//     }
//     _hash(key)
//     {
//         let index=0;
//         for(let i=0;i<key.length;i++)
//         {
//             index+=key.charCodeAt(i)
//         }
//         return index%this.size
//     }
//     set(key,value)
//     {
//         if(key.this<=0)
//         {
//             return " invalid key"
//         }
//         let index=this._hash(key)
//         if(this.array[index]==null)
//         {
//             this.array[index]=[]
//         }
//         this.array[index].push([key,value])
//         return "added "+key +"successfully"


//     }
//     get(key)
//     {
//         let index=this._hash(key)
//         if(this.array[index]==null)
//         {
//             return "no item in the list"
//         }
//         else
//         {
//             for(let i=0;i<this.array[index].length;i++)
//             {
//                 if (this.array[index][i][0] == key) {
//                     return this.array[index][i][1]
//                 }
//             }
            
//         }
//     }
//     delete(key)
//     {
//         if(key.length<=0)
//         {
//             return "inavlid key"
//         }
//         let index=this._hash(key)
//         for(let i=0;i<this.array[index].length;i++)
//         {
//             if(this.array[index][i][0]==key)
//             {
//                 this.array[index][i]=[]
//                 return "deleted successfully"
//             }
//         }
//         return "not found"
//     }

// }
// const hashtable= new hashTable()
// hashtable.set("name","abc")
// hashtable.set("age",20);
// console.log(hashtable.get("name"))
// console.log(hashtable.delete("name"))
// console.log(hashtable.delete("aa"))

// class Node{
//     constructor(key,data)
//     {
//         this.key=key
//         this.data=data
//         this.next=null
//         this.prev=null
//     }

// }
// class LinkedList{
//     constructor()
//     {
//         this.head=null;
//         this.tail=null
//         this.size=0
//     }
//     add(value,key)
//     {
//         const node = new Node(key,value)
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
//     search(key)
//     {
//         let current=this.head
//         while(current)
//         {
//             if(current.key==key){
//                 return "founded"
//             }
//         }
//     }
// }
// class hashTable{
//     constructor()
//     {
//         this.size=9
//         this.array=new Array(this.size)
//         let l= new LinkedList();
//     }
//     _hash(key)
//     {
//         let index=0;
//         for(let i=0;i<key.length;i++)
//         {
//             index+=key.charCodeAt(i)
//         }
//         return index%this.size
//     }
//     set(key,value)
//     {
//      let index=this._hash(key)
//      if(this.array[index]==null)
//      {
//          this.array[index]=new LinkedList()
//      }
//      this.array[index].add(key,value)
//     }
//     get(key)
//     {
//       let index=this._hash(key)
//       this.array[index].search(key)
//     }
// }

// 
// function mergeSort(arr)
// {
//     if(arr.length<=1)
//     {
//         return arr;
//     }
//     let middle=Math.ceil(arr.length/2);
//     let firsthalf=arr.slice(0,middle)
//     let secondHalf=arr.slice(middle)
//     return joins(mergeSort(firsthalf),mergeSort(secondHalf))

// }
// function joins(firsthalf,secondHalf)
// {
//     let i=0,j=0
//     let newArr=[]
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
//     while(j<secondHalf[j])
//     {
//         newArr.push(secondHalf[j])
//         j++;
//     }
//     return newArr;
// }
// console.log(mergeSort([1000,-10,20,-20]))
// function selectionSort(arr)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         let minimum=arr[i]
//         let index=i
//         for(let j=i+1;j<arr.length;j++)
//         {
//             if(arr[j]<minimum)
//             {
//                 index=j
//                 minimum=arr[j]
                
//             }
//         }
//         if(i!=index)
//         {
//             var temp = arr[i]
//             arr[i] = minimum
//             arr[index] = temp;
//         }
    
//     }
//     return arr;
// }
// console.log(selectionSort([100,-20,27,-199]))

// function selectionSort(arr)
// {
//     for(let i=1;i<arr.length;i++)
//     {
//         let j=i-1;
//         let element=arr[i]
//         while(element<arr[j] && j>=0)
//         {
//             arr[j+1]=arr[j]
//             j--;
//         }
//         arr[j+1]=element

//     }
//     return arr;
// }
// console.log(selectionSort([100,10,-100,200,-29]))

//hashtable

// class hashTable{
//     constructor()
//     {
//         this.size=29;
//         this.array=new Array(this.size)
//     }
//     _hash(key)
//     {
//         let index=0;
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
//         {
//             this.array[index]=[]
//         }
//         this.array[index].push([key,value]);
//         return this.array[index]
//     }
//     get(key)
//     {
//         let index=this._hash(key)
//         if(this.array[index]==null)
//         {
//             return "invalid key"
//         }
//         else
//         {
//             for(let i=0;i<this.array[index].length;i++)
//             {
//                 if(this.array[index][i][0]==key)
//                 {
//                     return this.array[index][i][1]
//                 }
//             }
//         }
//         return "nothing found"
//     }
//     delete(key)
//     {
//         let index=this._hash(key)
//         if(this.array[index]==null)
//         {
//             return "nothing to delete"
//         }
//         else
//         {
//             for(let i=0;i<this.array[index].length;i++)
//             {
//                 if(this.array[index][i][0]==key)
//                 {
//                     this.array[index][i]=null;
//                     return "deleted successfully"
//                 }
//             }
//         }
//         return "invalid key"
//     }
// }
// let h=new hashTable()
// h.set("name","aaa")
// h.set("age",0)
// console.log(h.get("age"))

// function mergeSort(arr)
// {
//     if(arr.length<=1)
//     {
//         return arr;
//     }
//     let middle=Math.ceil(arr.length/2)
//     let firsthalf=arr.slice(0,middle)
//     let secondhalf=arr.slice(middle)
//     return join(mergeSort(firsthalf),mergeSort(secondhalf));
// }
// function join(firsthalf,secondHalf)
// {
//     let i=0;
//     let j=0;
//     let newArr=[]
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
//         newArr.push(firsthalf[i]);
//         i++;
//     }
//     while(j<secondHalf[j])
//     {
//         newArr.push(secondHalf[j])
//         j++;
//     }
//     return newArr
// }
// console.log(mergeSort([1000,-199,010,2002,-199]))

// function duplicate(arr)
// {
   
//     for(let i=0;i<arr.length;i++)
//     {
//         let flag = 1;
//         for(let j=0;j<arr.length;j++)
//         {
//             if(arr[i]==arr[j] && i!=j)
//             {
//                flag=0
//             }
//         }
//         if(flag==1)
//         {
//             console.log(arr[i])
//         }
//     }
// }
// duplicate([1,2,3,5,3,2,1,4])

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let current = arr[i]
//         let j = i - 1;
//         for (; j >= 0 && arr[j] > current; j--) {
//             arr[j + 1] = arr[j]
//             console.log(arr)

//         }
//         arr[j + 1] = current
//     }
//     return arr;
// }
// console.log(insertionSort([1000, -100, 99, 1, 2, -99]));

