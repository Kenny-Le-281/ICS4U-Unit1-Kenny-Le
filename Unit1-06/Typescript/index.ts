// get arguments
//
import { readFileSync } from 'fs';

function calculateMean(arrayNumberSet) {
// this fuction calculates the mean
  let sum = 0;
    // Calculate the sum of all numbers in the array
    for (let i = 0; i < arrayNumberSet.length; i++) {
        sum += arrayNumberSet[i];
    }

    // Calculate the mean by dividing the sum by the number of elements
    const mean = sum / arrayNumberSet.length;
    return mean;
}

// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})

console.log(process.argv[2])


const file = readFileSync(process.argv[2], 'utf8')
// console.log(file)

const arrayNumberSet  = file.split(/\r?\n/)
// pop last element, since it will be empty (the EOF)
arrayNumberSet.pop()
console.log(arrayNumberSet)
const mean = calculateMean(arrayNumberSet)
console.log(mean)
