//for this problem I would start by taking the target number
create a for loop that subtracts one from the target and stores that in a value.
I would then check the array for that value..
if the target number minus the iteration exists then I would subtract the
iteration number from the target number and search for that value in the array.
if both values add up to be the target number, then return value one and value 2.



function findPairForSum(integers, target) {
    for (let i=0;i<target;i++){
      if(integers.indexOf(i)!== -1){
        console.log(integers[i] + ' : at index ' + i );
        let x = integers[i];
        let targetMinusX = target - x;
        if(integer.indexOf(targetMinusX) !== -1){
          let pair = [integers[i], targetMinusX]
          if (pair[0]+pair[1]===9){
            return pair;
          }
        }
      }
    }

}

// example
findPairForSum([3, 34, 4, 12, 5, 2], 9);
