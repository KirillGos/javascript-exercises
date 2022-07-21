const removeFromArray = (array, ...restArg) => {
    let remove = [];
    for (let j = 0; j < array.length; j++) {
      for(let i = 0; i < restArg.length; i++) {
       if( array[j] === restArg[i] ) {remove.push(array.indexOf(array[j]))}
        
      }
    }
 for (let a = 0; a < remove.length; a++) {
      if (a % 2 !== 0 && a !== 0) {
          array.splice(remove[a] -1, 1)
          remove[a]--
      } else {
          array.splice(remove[a] , 1)
          remove[a]--
         }
    }
 return array;    
}
// Do not edit below this line
module.exports = removeFromArray;
