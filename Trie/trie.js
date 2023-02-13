class Node {
  constructor(value) {
    this.value = value;
    this.isEndOfWord = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }
  insert(word) {
    let current = this.root;

    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new Node(char);
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;

    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.isEndOfWord;
  }
}

const trie = new Trie();

trie.insert("hello");
trie.insert("world");

console.log(trie);
console.log(trie.search("helloo"));