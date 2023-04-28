class directedGraph{
    constructor()
    {
        this.graph = new Map();
    }
    add(vertex)
    {
        if(!this.graph.has(vertex))
        {
            this.graph.set(vertex,[]);
        }
    }
    addEdges(vertex,edge)
    {
        if(!this.graph.has(vertex))
        {
            return "vertex not exists!";
        }
        this.add(edge);
        this.graph.get(vertex).push(edge);
        return "added succesfully";
       
    }
    removeEdges(edge,vertex)
    {
        if(!this.graph.get(vertex).includes(edge))
        {
            return "nothing to remove!";
        }
        this.graph.set(vertex, this.graph.get(vertex).filter(v => v != edge)) ;
        return "removed successfully";
    }
    breadthFirstSearch()
    {
        let result =[];
        let isVisisted={};
        let queue=[];
        for(let current of this.graph.keys())
        {
            if(!isVisisted[current])
            {
                queue.push(current);
                while(queue.length)
                {
                    let element = queue.shift();
                    result.push(element);
                    if(!isVisisted[element])
                    {
                        isVisisted[element]=true;
                        this.graph.get(element).forEach((arr) =>{
                            queue.push(arr);
                        });
                      
                    }
                }

            }

        }
        return result;
    }
}
let g = new directedGraph()
g.add(10)
g.addEdges(10,20)
g.addEdges(10,30)
console.log(g.breadthFirstSearch())
console.log(g.removeEdges(20, 10))
