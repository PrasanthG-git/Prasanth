var obj = {
  mykey: "value",
};

function getProperty(obj, key) {
  ///Your code Starts here
  return obj[key];

  ///Your code Ends here
}

//Lines For TestCase

getProperty(obj, "mykey");
getProperty(obj, "dummykey");
