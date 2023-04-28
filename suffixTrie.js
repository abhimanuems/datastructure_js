class Node{
    constructor()
    {
        this.map = new Map();
    }
}
class SuffixTrie{
    constructor()
    {
        this.root=new Node();
        this.end ="*";
    }
    insertElement(element)
    {
        for(let i=0;i<element.length;i++)
        {
            this.poppulateSuffix(element,i);
        }
    }
    poppulateSuffix(element,pos)
    {
        let current =this.root;
        for(let i=pos;i<element.length;i++)
        {
            if(!current.map.has(element[i]))
            {
                let node = new Node();
                current.map.set(element[i],node);
            }
            current=current.map.get(element[i]);
        }
        current.map.set(this.end,null);

    }
    search(word)
    {
        let current = this.root;
        for(let i=0;i<word.length;i++)
        {
            if(!current.map.has(word[i]))
            {
                return "not in the trie";
            }
            current=current.map.get(word[i]);
        }
        return current.map.has(this.end);
    }
}
let s = new SuffixTrie()
s.insertElement("Hello")
s.insertElement("hai")
s.insertElement("hi")
console.log(s.search("hi"))