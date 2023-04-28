class Graph {
    constructor() {
        this.map = new Map();

    }
    addVertex(vertex) {
        if (!this.map.has(vertex)) {
            this.map.set(vertex, []);
        }
    }
    addEdge(vertex1, vertex2) {
        if (this.map.has(vertex1) && this.map.has(vertex2)) {
            this.map.get(vertex1).push(vertex2);
            this.map.get(vertex2).push(vertex2);
        }
    }
    removeEdge(vertex1, vertex2) {
        if (this.map.has(vertex1) && this.map.has(vertex2)) {
            this.map.set(vertex1, this.map.get(vertex1).filter(v => v !== vertex2));
            this.map.set(vertex2, this.map.get(vertex2).filter(v => v !== vertex1));
        }
    }
    removeVertex(vertex) {
        if (this.map.has(vertex)) {
            let edges = this.map.get(vertex);
            for (const negihbors of edges) {
                this.removeEdge(vertex, negihbors);
            }
            this.map.delete(vertex);
        }
    }
    depthFirstSearch(start) {
        let result = [];
        let isVisisted = {}
        let stack = [start]
        isVisisted[start] = true;
        let currentVertex = start
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.map.get(currentVertex).forEach((element) => {
                if (!isVisisted[element]) {
                    isVisisted[element] = true;
                    stack.push(element);
                }
            });
        }
        return result;

    }
    breadthFirstSearch(start) {
        let result = []
        let queue = [start]
        let currentVertex;
        let isVisisted = {}
        isVisisted[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.map.get(currentVertex).forEach((current) => {
                if (!isVisisted[current]) {
                    isVisisted[current] = true;
                    queue.push(current);
                }
            });

        }
        return result;

    }
}
const g = new Graph()
g.addVertex('A')
g.addVertex('b')
g.addVertex('C')
g.addVertex('D')
g.addEdge('A', 'b')
g.addEdge('b', 'C')
g.addEdge('C', 'A')
g.addEdge('D', 'A')
console.log(g.map)
g.removeEdge('b', 'C');
console.log(g.map)
g.removeVertex('b');
console.log(g.map)
