///////////////////////////////
////////// PROBLEM 1 //////////
///////////////////////////////

// write a function that takes in the string and the list of dog names

// output should be "Matched_dog_name" if name in string, else, console.log "No Matches"

// loop the list and check for the string

// function checkDogs(aString, aList){
//     return (aList.includes(aString,0)) ? 'Matched_dog_name' : 'No Matches';
// };

// let dogs = ['Marley', 'Spot', 'Socks', 'Ranger'];
// console.log(checkDogs('Marley', dogs))


function findWords(aString, aList){
    for (const i of aList){
        // if i.lower() in string.lower(), return 'Matched_dog_name', else return 'No Matches'
        if (aString.toLowerCase().includes(i.toLowerCase())){
            return 'Matched_dog_name'
        }else{
            return 'No Matches'
        };
    };
};

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
console.log(findWords(dog_string, dog_names))


///////////////////////////////
////////// PROBLEM 2 //////////
///////////////////////////////

/* Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


function replaceEvents(arr){
    //starting with index 0, remove every item at (index + 2), replace with "even index"
    let i = arr.length
    while (i--) i%2 === 0 && (arr.splice(i, 1, 'even_index'));
    return arr
}
let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
console.log(replaceEvents(givenArr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


///////////////////////////////
////////// PROBLEM 3 //////////
///////////////////////////////


//"WHAT IS BETWEEN" Kata Redo

// Complete the function that takes two integers (a, b, where a < b)
// and return an array of all integers between the input parameters, including them.

function between(a,b){
    output = []
    for (let i = a; i <= b; i ++) {
        output.push(i);
    }
    return output
};
console.log(between(0, 4))


///////////////////////////////
////////// PROBLEM 4 //////////
///////////////////////////////

// "Sort Numbers" Kata redo
// return a sorted list of numbers, if list is empty or null, return []

function solution(nums){
    if (nums === []){
      return [];
    }else if (nums === null){
      return [];
    }else{
      return nums.sort(function(a, b) {
          return a - b;
      });
    };
};