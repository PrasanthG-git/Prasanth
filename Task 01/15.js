function getFullName(firstName, lastName) {
  ///Your code Starts here
  if (typeof firstName === typeof lastName) {
    if (firstName == "" && lastName == "") {
      return firstName + lastName;
    } else {
      return firstName + " " + lastName;
    }
  } else {
    if (typeof firstName != undefined) {
      return firstName;
    } else {
      return lastName;
    }
  }

  ///Your code Ends here
}
/*
Lines For TestCase

getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/
