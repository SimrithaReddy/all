class HashTable{
    constructor(){
        this.table = new Array(127);
        this.size = 0;
    }
    hash(key){                //key is any string.......
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash+=key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    set(key,value){
        let hashCode = this.hash(key);
        let existingVal = this.get(key);
        this.table[hashCode] = value;
        this.size = existingVal === undefined ? this.size+1 : this.size ;
    }
    get(key){
        let hashCode = this.hash(key);
        return this.table[hashCode]
    }
    remove(key){
        let hashCode = this.hash(key)
        if(this.table[hashCode]!==undefined){
            this.table[hashCode] = undefined;
            this.size--;
            return true
        }
        return false;
    }
}


let ht = new HashTable();
ht.set("CAnada",34);
ht.set("HFGHHGF",789);
ht.set("HGYTINBBCXDSW",989765);
console.log(ht.table);
console.log(ht.get("HFGHHGF"));
ht.set("HFGHHGF",8987);
console.log(ht.size);
console.log(ht.remove("HFGHHGF"));
console.log(ht.get("HFGHHGF"))
console.log(ht.size)
console.log(ht)