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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 * 
 * 
 *  let newAr =  ar.slice(i+1, n-1)    
      let temp = ar[i];
         if(newAr.indexOf(ar[i]) !== -1){
            count++;
            ar.slice(i, i);
            let tempIndex = ar.indexOf(temp);
            if(tempIndex !== -1) {
                ar.slice(tempIndex, tempIndex);
            }
        }
 * 
 */

function sockMerchant(n, ar) {
    // Write your code here
    
    let count = 0;
    let tempArr = {};
    // check 
    for(var i =0; i <= n - 1; i++){
         if(!(ar[i] in tempArr)){
             tempArr[ar[i]] = 1;
         }else{
             tempArr[ar[i]]++;
         }
    }  
    
    for (const [key, value] of Object.entries(tempArr)) {
        count += Math.floor(value / 2)
    }
      
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
