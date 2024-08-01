function getNthElement(array, n) {
  ///Your code Starts here
  let m = array.length;
  if (m >= n) {
    return array[n];
  } else {
    return undefined;
  }

  ///Your code Ends here
}

//Lines For TestCase

getNthElement([1, 3, 5], 1);
getNthElement([1, 3, 5], 2);
getNthElement([], 2);
