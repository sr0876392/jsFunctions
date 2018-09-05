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

// TODO: write the min() function
function min (x, y){
    if (x > y){
        console.log(y);
    }
    if (x < y) {
        console.log(x);
    }
    else {
        console.log (x)
    }
    
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1


