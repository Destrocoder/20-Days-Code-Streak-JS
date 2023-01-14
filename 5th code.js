/*A. Two Groups
time limit per test1 second
memory limit per test256 megabytes
inputstandard input
outputstandard output
You are given an array a
 consisting of n
 integers. You want to distribute these n
 integers into two groups s1
 and s2
 (groups can be empty) so that the following conditions are satisfied:

For each i
 (1≤i≤n)
, ai
 goes into exactly one group.
The value |sum(s1)|−|sum(s2)|
 is the maximum possible among all such ways to distribute the integers.
Here sum(s1)
 denotes the sum of the numbers in the group s1
, and sum(s2)
 denotes the sum of the numbers in the group s2
.

Determine the maximum possible value of |sum(s1)|−|sum(s2)|
.

Input
The input consists of multiple test cases. The first line contains a single integer t
 (1≤t≤2⋅104)
  — the number of test cases. The description of the test cases follows.

The first line of each test case contains a single integer n
 (1≤n≤105)
  — the length of the array a
.

The second line of each test case contains n
 integers a1,a2…an
 (−109≤ai≤109)
  — elements of the array a
.

It is guaranteed that the sum of n
 over all test cases does not exceed 2⋅105
.

Output
For each test case, output a single integer  — the maximum possible value of |sum(s1)|−|sum(s2)|
.

Example
inputCopy
4
2
10 -10
4
-2 -1 11 0
3
2 3 2
5
-9 2 0 0 -4
outputCopy
0
8
7
11
Note
In the first testcase, we can distribute as s1={10}
, s2={−10}
. Then the value will be |10|−|−10|=0
.

In the second testcase, we can distribute as s1={0,11,−1}
, s2={−2}
. Then the value will be |0+11−1|−|−2|=10−2=8
.

In the third testcase, we can distribute as s1={2,3,2}
, s2={}
. Then the value will be |2+3+2|−|0|=7
.

In the fourth testcase, we can distribute as s1={−9,−4,0}
, s2={2,0}
. Then the value will be |−9−4+0|−|2+0|=13−2=11
.*/




const cntInput = readline();
for (var i=0; i<cntInput; i++) {
    var arrLen = readline();
    var arrStr = readline();
    
    var s1 = 0;
    var s2 = 0;
    
    var inputArr = arrStr.split(' ');
    
    for (var k=0; k<arrLen; k++) {
        if (inputArr[k] < 0) {
            s1 = s1 + parseInt(inputArr[k]);
        }
        else {
            s2 = s2 + parseInt(inputArr[k]);
        }
    }
    
    var absS1 = Math.abs(s1);
    var absS2 = Math.abs(s2);
    
    var ret = (absS1 > absS2) ? (absS1 - absS2) : (absS2 - absS1);
    
    print(ret);
}