/*
Problem:

Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 
 
Example 1:
Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
 

Note:

1 <= emails[i].length <= 100
1 <= emails.length <= 100
Each emails[i] contains exactly one '@' character.
---------------------------------------------------------------------------------------------------------------------------------
My Approach:

Create a counter variable.
Create an object variable.

Run a for loop

Set a variable to split the emails at @, 

Set a variable to split the first email string after a plus, regex to replace anything after a plus sign with an empty string and add the second part of the email back.

Check if the new object suffices an email, return true and add to counter.

Finally, return the counter.

---------------------------------------------------------------------------------------------------------------------------------
My Solution:
*/

let numUniqueEmails = (emails) => {
    let counter = 0;
    let emailsMap = Object.create(null);
    
    for (i = 0; i < emails.length; i++) { 
        let parts = emails[i].split("@");
        let emailStr = parts[0].split("+")[0].replace(/\./g, "") + "@" + parts[1];

        if (!emailsMap[emailStr]) {
            emailsMap[emailStr] = true;
            counter++;
        }
    }
    
    return counter;
};

//test case - expected output = "2"
numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])