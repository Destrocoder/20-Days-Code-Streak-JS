/*A. Increasing Sequence
time limit per test1 second
memory limit per test64 megabytes
inputstandard input
outputstandard output
A sequence a0, a1, ..., at - 1 is called increasing if ai - 1 < ai for each i: 0 < i < t.

You are given a sequence b0, b1, ..., bn - 1 and a positive integer d. In each move you may choose one element of the given sequence and add d to it. What is the least number of moves required to make the given sequence increasing?

Input
The first line of the input contains two integer numbers n and d (2 ≤ n ≤ 2000, 1 ≤ d ≤ 106). The second line contains space separated sequence b0, b1, ..., bn - 1 (1 ≤ bi ≤ 106).

Output
Output the minimal number of moves needed to make the sequence increasing.

Examples
inputCopy
4 2
1 3 3 2
outputCopy
3
*/



input = readline().split(" ").map(item => parseInt(item))
sequence = readline().split(" ").map(item => parseInt(item))
 
count = 0
var previousItem = 0
var incrementer = input[1]
for (item of sequence) {
    while (item <= previousItem) {
        mod = (previousItem - item) % incrementer
        diff = Math.floor((previousItem - item)/incrementer)
        item += diff * incrementer
        if (item <= previousItem) {
            item += incrementer
            count++
        }
        count += diff
    }
    previousItem = item
}
 
print(count)