const buildHeap = (array) => {
    let n = array.length;
    for(let i= Math.floor(n/2)-1; i>0; i--){
        heapify(array,i,n)
    }
}

const heapify = (array,large,n)=> {
    let largest = large;
    let left = 2 * large + 1; 
    let right = 2 * large + 2;
    
    while(large<n){
        if(left < n && array[left] > array[largest]){
            largest = left;
        }
        if(right < n && array[right] > array[largest]){
            largest = right;
        }
        if(largest != large){
            swap(array, largest,large)
            heapify(array,largest,n)
        }
        return
    }
}

const swap = (array, left, right) => {
    [array[left],array[right]] = [ array[right],array[left]]
}