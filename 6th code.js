/*A. Add Plus Minus Sign
time limit per test1 second
memory limit per test256 megabytes
inputstandard input
outputstandard output
AquaMoon has a string a
 consisting of only 0
 and 1
. She wants to add +
 and −
 between all pairs of consecutive positions to make the absolute value of the resulting expression as small as possible. Can you help her?

Input
The first line contains a single integer t
 (1≤t≤2000
)  – the number of test cases. The description of test cases follows.

The first line of each test case contains a single integer n
 (2≤n≤100
) — the length of a
.

The second line of each test case contains a string a
 of length n
, consisting of only 0
 and 1
.

Output
For each test case, output a string of length n−1
 consisting of −
 and +
 on a separate line. If there is more than one assignment of signs that produces the smallest possible absolute value, any of them is accepted.

Example
inputCopy
3
2
11
5
01101
5
10001
outputCopy
-
+-++
+++-
Note
In the first test case, we can get the expression 1−1=0
, with absolute value 0
.

In the second test case, we can get the expression 0+1−1+0+1=1
, with absolute value 1
.

In the third test case, we can get the expression 1+0+0+0−1=0
, with absolute value 0
.*/





var x = readline(); // first line of input usually gives the no. of test cases,i.e, the no. of lines ahead.
 
var lengthOfNum; // declaring the variable outside the loop
var num;
var val;
var answer;
 
for(var i = 0 ; i < x ; i++) {
 
lengthOfNum = readline();
num = readline().split("");
val = parseInt(num[0]);
answer = [];
 
    for(var n = 1; n < num.length; n++){
        numCal = parseInt(num[n]);
        if(val == 0){
            if(num[n] == 1){
                answer.push("+");
                val = val + numCal;
            }else{
                answer.push("+");
                val = val + numCal;
            }
        }else{
            if(num[n] == 1){
                answer.push("-");
                val = val - numCal;
            }else{
                answer.push("+");
                val = val + numCal;
            }
        }
    }
print(answer.join(''));
}