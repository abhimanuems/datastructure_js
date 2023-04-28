class Graph {
    constructor() {
        this.graph = new Map();
    }
    insertVertex(data) {
        this.graph.set(data, [])

    }
    insertIfBiDirectional(vertex, data) {
        let getValue = this.graph.get(vertex)
        getValue.push(data)

    }
    graphInsert(vertex, edge, isBiDirectional) {
        if (!this.graph.has(vertex)) {

            this.insertVertex(vertex)
        }
        if (!this.graph.has(edge)) {
            this.insertVertex(edge)
        }
        if (isBiDirectional) {
            this.insertIfBiDirectional(vertex, edge)
            this.insertIfBiDirectional(edge, vertex)
        }
        else {
            this.insertIfBiDirectional(vertex, edge)
        }

    }
    removeEdge(vertex, edge, bidirection) {
        this.removeHelper(vertex, edge)
        let isBidirectional = this.graph.get(edge).includes(vertex)
        if (isBidirectional && bidirection) {
            this.removeHelper(edge, vertex)
        }
    }
    removeHelper(vertex, edge) {
        let duplicate = this.graph.get(vertex).filter
            (v => v !== edge
            );
        this.graph.set(vertex, duplicate)
    }
    removeVertex(vertex) {
        var check = this.graph.get(vertex)

        for (let x in check) {
            this.removeEdge(check[x], vertex, true)
        }
        this.graph.delete(vertex)
    }
    depthFirstSerach(vertex)
    {
        
        var visited = {};
        var result = [];
        const graph=this.graph;
        (function helper(vertex) {
            if (!vertex) {
                return "null";
            }
            visited[vertex] = true;
            result.push(vertex);
            graph.get(vertex).forEach(element => {
                if(!visited[element]){
                    return helper(element)
                }
            });
            
        })(vertex);
        return result;


    }
    depthFirstSerachIterative(start)
    {
        let result=[];
        let visited={}
        let stack=[start]
        let currentVertex;
        visited[start]=true
        while(stack.length){
            currentVertex=stack.pop()
            result.push(currentVertex)
            this.graph.get(currentVertex).forEach((element) =>
            {
                if (!visited[element])
                {  
               visited[element]=true
                    stack.push(element)
                }
            })
        }
        for(let x of this.graph.keys()){
           
           if(!result.includes(x)){
            result.push(x)
           }
        }


      

        return result;
    }
    breadthFirstSearch(start)
    {
        let result=[]
        let queue=[start]
        let visited={}
        visited[start]=true
        while(queue.length)
        {
            result.push(queue.shift())
            this.graph.get(start).forEach(value=>{
                if(!visited[value])
                {
                    visited[value]=true
                    queue.push(value)
                }
            });
        }
        return result
    }
    

    display() {


        for (let i of this.graph) {
            console.log(i)
        }
    }
}
let g = new Graph()
g.graphInsert(3, 5, true)
g.graphInsert(3, 4, true)
g.graphInsert(5, 6, false)
g.graphInsert(3, 6, false)
g.graphInsert(3, 7, false)

// g.display()
// console.log("after  deleting edge 5 from 3 ")
// g.removeEdge(3, 5, true)
// g.display()
// console.log("after deleting a key ")
// g.removeVertex(3)
// g.display()
// console.log(g.depthFirstSerach(5))
console.log(g.depthFirstSerachIterative(5))
console.log("breadthFirstSearch")
console.log(g.breadthFirstSearch(3))


