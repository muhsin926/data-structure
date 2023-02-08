const arr =[5,6,2,3,5,6,]
var n = arr.length
for (let i= 0; i<n; i++){
    for(let j=i+1; j<n; j++){
        if(i == j) continue;
        if (arr[i]==arr[j]){
            console.log("u");
            for(let k=j; k<n; k++){
               if(j!=n){
                arr[j]=arr[j+1]
               }
            }
            n=n-1;
        }
    }
    
}

for(let i =0; i<n; i++){
    console.log(arr[i]);
}
