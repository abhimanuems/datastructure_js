class UnidirectedGraph {
    constructor() {
        this.graph = new Map();
    }
    addVertex(vertex) {
        if (!this.graph.has(vertex)) {
            this.graph.set(vertex, []);
            return;

        }
        return "Already exists";
    }
    addEdges(vertex1, vertex2) {
        if (!this.graph.has(vertex1)) {
            this.addVertex(vertex1);
            this.graph.get(vertex1).push(vertex2);
        }
        else if (!this.graph.get(vertex1).includes(vertex2)) {
            this.graph.get(vertex1).push(vertex2);
        }

        if (!this.graph.has(vertex2)) {
            this.addVertex(vertex2);
            this.graph.get(vertex2).push(vertex1);
        }
        else if (!this.graph.get(vertex2).includes(vertex1)) {
            this.graph.get(vertex2).push(vertex1);
        }

        return "added edges"
    }
    remove(vertex, edges) {
        if (!this.graph.has(vertex) || !this.graph.get(vertex).includes(edges)) {
            return "not in the graph";
        }
        this.graph.set(vertex, this.graph.get(vertex).filter(v => v != edges));
        this.graph.set(edges, this.graph.get(edges).filter(v => v != vertex));
    }
    removeVertex(vertex) {
        if (!this.graph.has(vertex)) {
            return "not in the list !";
        }
        this.graph.get(vertex).forEach((current) => {
            this.remove(vertex, current);
            this.remove(current,vertex)
        });
        this.graph.delete(vertex);
        return
    }
    depthFirstSearch() {
        let result = [];
        let isVisited = {};

        for (let vertex of this.graph.keys()) {
            if (!isVisited[vertex]) {
                let stack = [vertex];
                while (stack.length) {
                    let currentElement = stack.pop();
                    if (!isVisited[currentElement]) {
                        result.push(currentElement);
                        isVisited[currentElement] = true;
                        this.graph.get(currentElement).forEach((element) => {
                            stack.push(element);
                        });
                    }
                }
            }
        }

        return result;
    }

}
let g = new UnidirectedGraph()
g.addEdges(10, 20)
g.addEdges(40, 50)
console.log(g.graph)
console.log("depth first search :")
console.log(g.depthFirstSearch(10));