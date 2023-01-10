
class HashTable {
constructor(){
    this.table = new Array()
    this.size = 0
}

_hash(key){
    let hash = 0
    for (let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i);
    }
    return  hash % this.table.length
}

set(key,value){
   let index = this._hash(key)
   
   this.table[index] = [ key,value ]
   this.size++
}

get(key){
    let target = this._hash(key)
    return this.table[target]
}

remove(key){
    const index = this._hash(key)
    if ( this.table[index] && this.table[index].length ){
        this.table[index] = []
        this.size--;
        return true
    }
    return false
}
}

let ht = new HashTable()
ht.set("Muhsin",777)
ht.set("jauhar",888)
console.log(ht.get("jauhar"));
ht.remove("jauhar")
console.log(ht.get("jauhar"));