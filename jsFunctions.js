// Square the given number x
function square1(x) {
  
  return Math.pow (x, 2);

}

// Square the given number x
const square2 = x => {
    return Math.pow (x, 2);
} // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

// square of 0-10

function square() {
  for (i = 0; i <= 10; i++){
    console.log (Math.pow (i, 2));
  }
}
square();


// TODO: write the min() function
function min (x, y){
    if (x > y){
        return y;
    }
    if (x < y) {
        return x;
    }
    else {
        return x, y;
    }
    
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1


