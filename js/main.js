//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ['Max',"HAS","PuRple","dog"]

const findWords = (my_arr, my_string) => {
    for (let each of my_arr) {
        if (my_string.includes(each)){
            return console.log('Matched dog_name:', each)
        }
        else {
            return console.log('No match')
        }
    }
}

findWords(dog_names, dog_string)






//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i<arr.length; i++){
        if (i % 2 == 0) {
            arr[i] = 'even index';
        }
       
    }
    return arr;
}
console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]









// DESCRIPTION:
// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let z = [];
  let count = 1;
  while (count < n+1){
    z.push(x*count);
    count ++
  }
  
  return z;
};
console.log(countBy(10,5))


// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  let count = 0
  for(let each of arr){
    if (each >=0){
      count += each
    }
  }
  return count
}
console.log(positiveSum([1, -4, 7, 12]))
