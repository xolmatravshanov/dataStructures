'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    // input
    // aba
    // 10
    
    // output
    // 7
    
     
         
    // first count inside ( s ) 
    // second count how much left from string after n times 
 
  let c = 0,
      ca = 0,
      r = n % s.length

  for (let i = s.length; i-- > 0;) {
    if (s.charAt(i) == 'a') {
      ++c

      if (i < r)
        ++ca
    }
  }

  return ((n - r) / s.length * c) + ca

    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
