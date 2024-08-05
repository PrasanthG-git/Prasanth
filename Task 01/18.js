function getDistance(x1, y1, x2, y2) {
  ///Your code Starts here
  let dx = x2 - x1;
  let dy = y2 - y1;
  let distance = dx * dx + dy * dy;
  let g = Math.sqrt(distance);
  let num = parseInt(g);

  return num;

  ///Your code Ends here
}
/*
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/
