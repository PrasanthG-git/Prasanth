function getOpposite(num) {
    ///Your code Starts here
     if (value % 1 === 0) {
       return -value;
     } else {
       return -1;
     }
  ///Your code Ends here
}


let c = getOpposite(5);
console.log(c);
c = getOpposite(0);
console.log(c);
c=getOpposite(-5);
console.log(c);
c=getOpposite("5a");
console.log(c);
c=getOpposite(5.5)
console.log(c);

