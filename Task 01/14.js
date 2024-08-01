function isEven(num) {
  ///Your code Starts here
  let n = typeof num;
  if (n == "string") {
    return -1;
  } else if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
  ///Your code Ends here
}
//Lines For TestCase
isEven(12);
isEven(0);
isEven(11);
isEven("11h");
