class Node{
    constructor()
    {
        this.map = new Map();
    }

}
class PrefixTrie{
    constructor()
    {
        this.root = new Node();
        this.end =true;
    }
    insert(word)
    {
        let current=this.root;
       for(let i=0;i<word.length;i++)
       {
            if(!current.map.has(word[i]))
            {
                let node = new Node();
                current.map.set(word[i],node);
            }
            current=current.map.get(word[i]);
       } 
       current.map.set(this.end,null)
       return;
    }
   search(word)
   {
    let current = this.root
    for(let i=0;i<word.length;i++)
    {
        if(!current.map.has(word[i]))
        {
            return false;
        }
        current=current.map.get(word[i]);
    }
    return current.map.has(this.end);
   }

}
let p =new PrefixTrie()
p.insert("apple")
p.insert("apricot")
p.insert("banana")
p.insert("cherry")
console.log(p.search("apricot"));
console.log(p.root.map)