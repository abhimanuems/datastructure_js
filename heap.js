class HeapMax {
    constructor() {
        this.array = new Array()

    }
    add(data) {
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
    remove(value) {
        let removeIndex = this.array.indexOf(value);
        [this.array[removeIndex], this.array[this.array.length - 1]] = [this.array[this.array.length - 1], this.array[removeIndex]];
        this.array.pop();
        this.removeHelper(removeIndex);
        return "deleted " + value
    }
    removeHelper(index) {
        if (index <= this.array.length - 1) {
            let i = index
            let parent = i
            let leftChild = 2 * i + 1
            let rightChild = 2 * i + 2
            if (2 * index + 1 >= this.array.length) {
                return;
            }
            else if (this.array[parent] > this.array[rightChild]) {
                return
            }
            else {

                if (this.array[leftChild] > this.array[parent]) {
                    [this.array[leftChild], this.array[parent]] = [this.array[parent], this.array[leftChild]]
                    this.removeHelper(leftChild)
                }
                else {
                    [this.array[rightChild], this.array[parent]] = [this.array[parent], this.array[rightChild]]
                    this.removeHelper(rightChild)
                }


            }
        }
    }

}
var h = new HeapMax()
h.add(10)
h.add(20)
h.add(510)
h.add(178)
h.add(1)
h.add(-100)
console.log("after inserting elements")
console.log(h.array)
console.log(h.remove(178))
console.log("after removing ")
console.log(h.array)
