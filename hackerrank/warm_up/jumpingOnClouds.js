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
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    // input 
    
    // 6
    // [0 0 0 0 1 0]
    
    // output
    // 3
    
    var cloudsLength = c.length - 1;
    var jumpCount = 0;
    var currentPost = 0;
    
    while(currentPost < cloudsLength){
        if(!c[currentPost+2])
            currentPost = currentPost + 2;
        else{
             currentPost  = currentPost + 1;
        }     
        
        jumpCount++;
    }
     return jumpCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c);

    ws.write(result + '\n');

    ws.end();
}