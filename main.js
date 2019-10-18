// Q1: Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.
function printInt(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

// printInt(10)

// Q2: Write the function printIntRev(n) taking one parameter n and print all natural numbers in reverse in console (from n to 1).
function printIntRev(n) {
  for (var i = n; i >= 1; i--) {
    console.log(i);
  }
}

// printIntRev(10);

// Q3: Write the function checkInput(x) taking one  parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x  is a string;and return ‘boolean’ if x is a boolean. Otherwise returns -1.

function checkInput(x) {
  if (typeof x === "string") {
    return "string";
  } else if (typeof x === "boolean") {
    return "boolean";
  } else if (typeof x === "number") {
    return "number";
  } else {
    return -1;
  }
}

// console.log(checkInput(15));

// Q4: Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num, and return it.

function simpleEvenAdding(num) {
  var solution = 0;
  for (var i = 0; i <= num; i += 2) {
    solution += i;
  }
  return solution;
}

// console.log(simpleEvenAdding(6));

// Q5: Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.

function letterCapitalize(str) {
  var solution = "";
  var words = str.split(" ");
  var length = words.length;
  for (var i = 0; i < length; i++) {
    solution += " " + words[i][0].toUpperCase() + words[i].slice(1);
  }
  return solution;
}

// console.log(letterCapitalize("you cannot find answer"));

// Q6: Write the function simpleReverse(str) taking a string and return the string in reversed order.

function simpleReverse(str) {
  var charArray = str.split('');
  var reversedArray = charArray.reverse();
  return reversedArray.join("");
}

// simpleReverse("sir")

// Q7: Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min).

function findDiff(arr) {
  
}

// Q8: Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.

function timeConvert(num) {
  var hour = (num -(num % 60)) / 60;
  var minutes = num % 60;
  var solution = hour + ":" + minutes;
  return solution;
}

// timeConvert(90)

// Q9: Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.

function findStr(str, long)

// Q10: Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between them, including the bounds.

function selfDividingNumbers(left, right)

// Q11: Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros(nums)

// Q12: Create an average(nums) function that calculates the average of an array of numbers.

function average(nums)