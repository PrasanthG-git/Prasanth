function isSameLength(word1, word2) {
  ///Your code Starts here
  let n = word1.length;
  let m = word2.length;
  if (n == m) {
    return true;
  } else {
    return false;
  }

  ///Your code Ends here
}

//Lines For TestCase

isSameLength("GUVI", "GEEK");
isSameLength("GUVI", "ZEN");
isSameLength("Hello", "GUVI");
