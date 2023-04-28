class Node{
    constructor()
    {
        this.map=new Map()
    }
}
class Trie{
    constructor()
    {
        this.node = new Node()
        this.root=this.node;
       this.end="*"
       this.word=[]
    }
    insertString(string)
    {
        this.postSuffixTrie(string)
    }
    postSuffixTrie(string)
    {
         for(let i=0;i<string.length;i++)
         {
             this.insertSubStringStartingAt(i,string)
         }

    }
    insertSubStringStartingAt(pos,string)
    {
        let current=this.root
        
         for(let i=pos;i<string.length;i++)
         {
            if(!current.map.has(string[i]))
            {
                let node = new Node();
                current.map.set(string[i],node)

            }
        
                current=current.map.get(string[i])
            
         }
         current.map.set(this.end,null);
         return 
    }
    conatins(string)
    {
        let current=this.root
        for(let i=0;i<string.length;i++)
        {
            let letter=string[i]
            if(!current.map.has(letter))
            {
                return false
            }
            current=this.node.map.get(letter);


        }
        return current.map.has(this.end)


    }
    searchStartWith(letter)
    {
        let current=this.root;
        if(!current.map.has(letter))
        {
            return this.word
        }
        current=current.map.get(letter);
        this.collectWords(current,letter)

    }
    collectWords(current,letter)
    {
        if(current.map.has(this.end))
        {
            this.word.push(letter);
        }
        for(const [char,node] of current.map)
        {
            if(char!==this.end)
            {
                this.collectWords(node,letter+char +this.word);
            }
        }

    }
}
let trie=new Trie()
trie.insertString("hello");
trie.insertString("world");
trie.insertString("hell");
trie.insertString("help");
console.log(trie.searchStartWith("h"))