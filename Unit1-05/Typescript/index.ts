/**
 * This is the BoardFoot program
 *
 * By: Kenny Le
 * Version: 1.0
 * Since: 2024-03-01
 */

import { createPrompt } from 'bun-promptx'

function checkBoardFoot(width, height) {
// this function calculates the length of a boardFoot
  const boardFoot = 144
  const lengthInInches = boardFoot / (width * height);
  return lengthInInches;
}

console.log("This program figures out the length of a wooden board that is 1 board foot in dimensions. (1 board foot is 144 cubic inches of wood.)")
while (true) { 
  const widthString = prompt('Enter the width(inch): ')
  const width = parseFloat(widthString)
  const heightString = prompt('Enter the height(inch): ')
  const height = parseFloat(heightString)
  if (isNaN(width) || isNaN(height)) {
    console.log('Invalid Input')
    break
  } else if (width < 0 || height < 0) {
    console.log('Invalid Input')
    break
  } else {
    const lengthInInches = checkBoardFoot(width, height)
    console.log('\nLength of the board:', lengthInInches, 'inch(es) long.')
    break
  }
}
 
console.log('\nDone.')

