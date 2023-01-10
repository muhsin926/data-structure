function reverse(string) {
    let reversed = ''
    for (let character of string) {
      reversed = character + reversed
    }
    return reversed
  }

  let s = "level"
//   console.log(reverse(s));
  
  function reverseFn(s){
      return s.split('').reverse('').join('')
    }
    // console.log(reverseFn(s));


    function palindrom(s){
       const pali =  reverseFn(s)
       return pali  === s 
    }

    console.log(palindrom(s))