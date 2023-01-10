class HashTable {
    constructor(){
        this.table = new Array(120)
        this.size = 0
    }

    _hash(key){
        let hash = 0
        for (let i = 0; i<key.length; i++){
            hash += key.charCodeAt(i);

        }
        return hash % this.table.length
    }

    set(key,value){
        const index = this._hash(key)

        this.table[index] = [key,value]
        this.size++
        return true
    }

    get()
}