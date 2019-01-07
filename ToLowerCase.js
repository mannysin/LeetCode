/*
Problem:

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"

Example 2:

Input: "here"
Output: "here"

Example 3:

Input: "LOVELY"
Output: "lovely"
---------------------------------------------------------------------------------------------------------------------------------
My Approach:

Create variable that takes the str argument and then uses the .ToLowerCase string method on that str. Finally, return that variable.

---------------------------------------------------------------------------------------------------------------------------------
My Solution:
*/

let toLowerCase = function(str) {
    let lowerCase = str.toLowerCase(str)
    
    return lowerCase
};

//test case - expected output = "hello"
toLowerCase("Hello")