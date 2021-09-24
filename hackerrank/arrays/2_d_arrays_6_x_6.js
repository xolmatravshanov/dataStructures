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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */



// example input 
// var arr = [
//     [-1, -1, 0, -9 ,-2 ,-2],
//     [-2, -1, -6, -8, -2, -5],
//     [-1, -1, -1, -2, -3, -4],
//     [-1, -9, -2, -4, -4, -5],
//     [-7, -3, -3, -2, -9 ,-9],
//     [-1, -3, -1, -2, -4, -5],
// ]

function hourglassSum(arr) {
    /*
        /// input example
        [
            [ 1, 1, 1, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0 ],
            [ 1, 1, 1, 0, 0, 0 ],
            [ 0, 0, 2, 4, 4, 0 ],
            [ 0, 0, 0, 2, 0, 0 ],
            [ 0, 0, 1, 2, 4, 0 ],
        ]
    */
    
    // output int 19
    // Write your code here
    var count = -Infinity;
    
    for(var i = 0; i <= 3; i++){
        for(var j = 0; j <= 5; j++){
           
                var temp  = (arr[i][j] + arr[i][j +1] + arr[i][j+2])
                +  (arr[i+1][j+1])
                +  (arr[i+2][j] + arr[i+2][j +1] + arr[i+2][j+2]);
            
            if( count <= temp )
                count = temp;
         
        }
    }  
    
    return count;
}
 
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
