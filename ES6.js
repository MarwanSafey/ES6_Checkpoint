// Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
  return -number;
}

// You Can't Code Under Pressure #1
// Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  return i*2;
}

// Multiply
//This code does not execute properly. Try to figure out why.
function multiply(a, b){
  return a * b;
}
/*  Even or Odd
 Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else return "Odd";
}

// Convert a Boolean to a String
//Implement a function which convert the given boolean value into its string representation.
function booleanToString(b){
    if(b == true){
      return "true"
    } else return "false"
  }

/* Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo" */

function areYouPlayingBanjo(name) {
  if (name[0].toUpperCase() == "R") {
    return `${name} plays banjo`;
  } else return `${name} does not play banjo`
}

/* Reversed sequence
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1] */

const reverseSeq = n => {
  let sequence = [];
  for (let i = n; i > 0; i--) {
    sequence.push(i);
  }
  return sequence;
};


/* List Filtering
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */
function filter_list(l) {
  let seq =[];
  for (i=0; i< l.length; i ++){
    if (typeof l[i] == "number"){
      seq.push(l[i]);
    }
  }
  return seq;
}

/* Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).
For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  The correct answer would be 17.
Hint: Don't forget to check for bad values like null/undefined*/

function countSheeps(sheep) {
  let sum = 0;
  for (i=0; i<sheep.length; i++){
    if (sheep[i] == true) {
       sum += 1;
    }
  }
  return sum;
}

/*   Multiples of 3 or 5
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once. */

function solution(number){
  let sum = 0 ;
  for (i=1; i < number ; i++ ) {
    if (i % 3 == 0 || i % 5 == 0){
       sum += i
    }
  }
  return sum;
}




/*Leap Years  
In this kata you should simply determine, whether a given year is a leap year or not. 
In case you don't know the rules, here they are:
Years divisible by 4 are leap years,
but years divisible by 100 are not leap years,
but years divisible by 400 are leap years.
 */

function isLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
        return true;
    } else return false;
  }


/* Square Every Digit 
 Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer. */
function squareDigits(num){
  let seq = num.toString().split("");
   for (i=0; i < seq.length ; i ++) {
     seq[i] = Math.pow(Number(seq[i]), 2)
   }
   return Number(seq.join(""));
 }


/*  Number of People in the Bus
 There is a bus moving in the city which takes and drops some people at each bus stop.
You are provided with a list (or array) of integer pairs. 
Elements of each pair represent the number of people that get on the bus (the first item) 
and the number of people that get off the bus (the second item) at a bus stop.
Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).
 Even though it is the last bus stop,
 the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D */

 var number = function(busStops){
  let totalPeople = 0;
  for (let i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0]; // Add people getting on
    totalPeople -= busStops[i][1]; // Subtract people getting off
  }
  return totalPeople;
}

/*Remove the minimum 
Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value,
remove the one with a lower index. If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left. */

function removeSmallest(numbers) {
    if (numbers.length === 0){
      return []
    }
    const minValue = Math.min(...numbers);
    const index = numbers.indexOf(minValue);
    return numbers.slice(0, index).concat(numbers.slice(index + 1));
  }


/* Neutralisation 
Given two strings comprised of + and -, 
return a new string which shows how the two strings interact in the following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0. */

function neutralise(s1, s2) {
    let result = "";
    
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === "+" && s2[i] === "+") {
        result += "+";
      } else if (s1[i] === "-" && s2[i] === "-") {
        result += "-";
      } else {
        result += "0";
      }
    }
    
    return result;
  }



/* Flick Switch
Create a function that always returns true for every item in a given list.
However, if an element is the word "flick", switch to always returning the opposite boolean value. */


function flickSwitch(arr){
    let switchValue = true; // Initial boolean value
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'flick') {
        switchValue = !switchValue; // Toggle the boolean value for "flick"
         result.push(switchValue);
      } else {
        result.push(switchValue); // Push the current boolean value
      }
    }
  
    return result;
  }


/* Quarter of the year
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter;
 and month 11 (November), is part of the fourth quarter. */

const quarterOf = (month) => {
    if (month <=3){
      return 1;
    } else if (month >= 4 && month <= 6){
      return 2;
    } else if (month >= 7 && month <= 9){
      return 3;
    } else return 4;
    
  }


  /* 
Century From Year
The first century spans from the year 1 up to and including the year 100, 
the second century - from the year 101 up to and including the year 200, etc.
Task
Given a year, return the century it is in. */

  function century(year) {
    var cent = Math.ceil(year/100);
    return cent;
  }
//OR const century = year => Math.ceil(year/100)

/* 
What century is it?
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th" */

function whatCentury(year)
{
  let cent = Math.ceil(year/100).toString();
  if (cent[1] == 1 && cent >= 21) {
    return `${cent}st`
  } else if (cent[1] == 2 && cent >= 22) {
    return `${cent}nd`
   } else if (cent[1] == 3 && cent >= 23) {
    return `${cent}rd`
   } else return `${cent}th`
}



/* Compare within margin
Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. 
The function should return whether a is lower than, close to, or higher than b.
Please note the following:
When a is close to b, return 0.
For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
Otherwise...
When a is less than b, return -1.
When a is greater than b, return 1.
If margin is not given, treat it as if it were zero.
Assume: margin >= 0
Tip: Some languages have a way to make parameters optional.
 */

function closeCompare(a, b, margin = 0){
  let sum = Math.abs(a - b);
  if (sum <= margin) {
    return 0;
  }
  else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}

