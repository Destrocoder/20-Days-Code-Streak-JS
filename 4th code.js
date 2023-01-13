/*A. SSeeeeiinngg DDoouubbllee
time limit per test1 second
memory limit per test256 megabytes
inputstandard input
outputstandard output
A palindrome is a string that reads the same backward as forward. For example, the strings z
, aaa
, aba
, and abccba
 are palindromes, but codeforces
 and ab
 are not.

The double of a string s
 is obtained by writing each character twice. For example, the double of seeing
 is sseeeeiinngg
.

Given a string s
, rearrange its double to form a palindrome. Output the rearranged string. It can be proven that such a rearrangement always exists.

Input
The first line of input contains t
 (1≤t≤1000
) — the number of test cases.

The only line of each test case contains a single string s
 (1≤|s|≤100
) consisting only of lowercase English letters.

Note that the sum of |s|
 over all test cases is not bounded.

Output
For each test case, output a palindromic string of length 2⋅|s|
 that is a rearrangement of the double of s
.

Example
inputCopy
4
a
sururu
errorgorn
anutforajaroftuna
outputCopy
aa
suurruurruus
rgnororerrerorongr
aannuuttffoorraajjaarrooffttuunnaa
Note
In the first test case, the double of a
 is aa
, which is already a palindrome.

In the second test case, the double of sururu
 is ssuurruurruu
. If we move the first s
 to the end, we get suurruurruus
, which is a palindrome.

In the third test case, the double of errorgorn
 is eerrrroorrggoorrnn
. We can rearrange the characters to form rgnororerrerorongr
, which is a palindrome.*/





var limit = parseInt(readline());
for (var i = 0; i < limit; i++)
{
    var caseString = readline()
    var result = "";
    for (var j = 0; j < caseString.length; j++)
    {
        result = caseString[j] + result + caseString[j];
    }
    print(result);
}