function getLastElement(array) {
  ///Your code Starts here
  let m = array.length;
  if (m > 0) {
    return array[m - 1];
  } else {
    return -1;
  }

  ///Your code Ends here
}

//Lines For TestCase

getLastElement([1, 2, 3, 4]);
getLastElement([1, 2, 3, 4, 5, 6, 7]);
getLastElement([]);
