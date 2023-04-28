class MaxHeap {
    constructor() {
        this.array = [];
    }

    add(element) {
        this.array.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.array.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.array[parentIndex] < this.array[index]) {
                [this.array[parentIndex], this.array[index]] = [this.array[index], this.array[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    delete() {
        const length = this.array.length - 1;
        [this.array[length], this.array[0]] = [this.array[0], this.array[length]];
        const poppedValue = this.array.pop();
        this.sinkDown();
        return poppedValue;
    }

    sinkDown() {
        let index = 0;
        let leftChildIndex, rightChildIndex;
        while (index < this.array.length) {
            leftChildIndex = 2 * index + 1;
            rightChildIndex = 2 * index + 2;
            let largerChildIndex = null;
            if (leftChildIndex < this.array.length && this.array[index] < this.array[leftChildIndex]) {
                largerChildIndex = leftChildIndex;
            }
            if (rightChildIndex < this.array.length && this.array[index] < this.array[rightChildIndex] && this.array[rightChildIndex] > this.array[leftChildIndex]) {
                largerChildIndex = rightChildIndex;
            }
            if (largerChildIndex === null) {
                break;
            }
            [this.array[index], this.array[largerChildIndex]] = [this.array[largerChildIndex], this.array[index]];
            index = largerChildIndex;
        }
    }

    sort(arr) {
        for (const element of arr) {
            this.add(element);
        }
        const sortedArray = [];
        while (this.array.length) {
            sortedArray.push(this.delete());
        }
        return sortedArray;
    }
}

const h = new MaxHeap();
const arr = [626, 28, 156, 82, 2442, 21];
console.log(h.sort(arr)); 
