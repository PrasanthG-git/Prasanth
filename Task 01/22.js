var obj = {};

function addProperty(obj, key) {
  ///Your code Starts here
  return (obj[key] = true);

  ///Your code Ends here
}

addProperty(obj, "mykey");

//Lines For TestCase

obj.mykey;
