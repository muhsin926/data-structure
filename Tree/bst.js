

class Node{
    constructor(data){
        this.data = data;
        this.left = null
        this.right = null
    }
}

class BinerySearchTree{
     
    constructor(){
        this.root = null
    }
      isEmpty() {
        return this.root == null
    }

    addChildNode(node, root){
        if(node.data<root.data){
            if(root.left == null){
                root.left = node;

            }else{
                this.addChildNode(node,root.left)
            }
        }else{
            if(root.right== null){
                root.right = node;
            }else{
                this.addChildNode(node,root.right)
            }
        }
        
    }

    addNode (val){
        let node = new Node(val)
        if(this.isEmpty()){
            this.root = node;
        }else{
            this.addChildNode(node,this.root)
        }
    }

    search(val,root){
        if(root){
        if(val == root.data){
            return true
        }else if(val<root.data){
            this.search(val,root.left)
        }else{
            this.search(val,root.right)
        }
    }else{
        console.log("jasdfh");
    }
    }



    preOrder(root){
        if(root){
            console.log(root.data+" ");
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.data);
        }
    }
}

let bst = new BinerySearchTree()
console.log( bst.isEmpty());
bst.addNode(3)
bst.addNode(83)
bst.addNode(37)
bst.addNode(325)
bst.addNode(6)
bst.preOrder(bst.root)
console.log("inorder");
bst.inOrder(bst.root)
console.log('postorder');
bst.postOrder(bst.root)
bst.search(10,bst.root)
console.log( bst.isEmpty());