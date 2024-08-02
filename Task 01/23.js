var obj = {
  mykey: "value",
};

function removeProperty(obj, key) {
  ///Your code Starts here
  return delete obj.mykey;

  ///Your code Ends here
}

removeProperty(obj, "mykey");

//Lines For TestCase

obj.mykey === undefined;
