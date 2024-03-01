/**
 * This is the BoardFoot program
 *
 * By: Kenny Le
 * Version: 1.0
 * Since: 2024-03-01
 */

import { createPrompt } from 'bun-promptx'

function BoardFoot(width: number, height: number): number {
    const lengthInInches = 144 / ( width * height);
    return lengthInInches;
}

    console.log("This program figures out the length of a wooden board that is 1 board foot in dimensions. (1 board foot is 144 cubic inches of wood.)")
    while (true) { 
        const widthString = prompt('Guess a number between 1 and 6:  ')
        const width = parseFloat(widthString)

        const heightString = prompt('Guess a number between 1 and 6:  ')
        const height = parseFloat(heightString)
        if (isNaN(width || height)) {
            console.log('Invalid Input')
            break
        } else if (width < 0 || height < 0) {
            console.log('Invalid Input')
            break
        } else {
            const lengthInInches = BoardFoot(width, height)
            console.log('Length of the board (in inches):', lengthInInches)
            break
        }
    }
    console.log('\Done.')

