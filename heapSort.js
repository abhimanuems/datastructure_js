class heapSort{
    constructor()
    {
        this.array = new Array([
            8, 8, 7, 3, 1,
            2, 3, 1, 2, 0
        ])
       
    }
    add(data)
    {
        this.array.push(data)
        this.bubbleUp()
    }
   
    bubbleUp() {
        let index = this.array.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.array[parent] < this.array[index]) {
                [this.array[parent], this.array[index]] = [this.array[index], this.array[parent]];
                index = parent;
            } else {
                break;
            }
        }
    }
    Sort()
    {
      [this.array[0],this.array[this.array.length-1]]=[this.array[this.array.length-1],this.array[0]]  
        this.sortHelper(this.array,this.array.length-1)
        
    }
    sortHelper(a,n)
    {
        if(n<=1)
        {
            return
        }
        let index = n - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.a[parent] < this.a[index]) {
                [this.a[parent], this.a[index]] = [this.a[index], this.a[parent]];
                index = parent;
            } else {
                break;
            }
        }
        this.sortHelper(a,n-1)

    }
   
}
let heapsort=new heapSort()
// for (let i = 0; i < 10; i++) {

//     var n = Math.floor(Math.random() * 10.5)
//    heapsort.add(n)
// }

heapsort.Sort();
console.log(heapsort.array)