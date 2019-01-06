/*
Problem:

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
---------------------------------------------------------------------------------------------------------------------------------
My Approach:

Make counter variable to increase every time a Stone is considered a Jewel.
Have to loop thru each string and add to counter if a Stone is also a Jewel.

Once a Jewel is considered a Stone, add to counter.

Finally, return the counter.
---------------------------------------------------------------------------------------------------------------------------------
My Solution:
*/

let numJewelsInStones = function(J, S) {
    let counter = 0
    
    for(i = 0; i < S.length; i++){
        if(J.includes(S.charAt(i))){
            counter++;
        }           
    }

    return counter;
    
};

//test case - expected output = 3
numJewelsInStones("aA", "aAAbbbb")