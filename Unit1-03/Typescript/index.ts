/**
 *
 * This program checks time for pizza, sub, soup
 *
 * By: Kenny Le
 * Version 1.0
 * Since 2024-02-21
 */

import { createSelection } from 'bun-promptx'

const foodSelectedInt = createSelection([
  { text: 'sub' },
  { text: 'pizza' },
  { text: 'soup' }
], {
  headerText: 'Select food to microwave: ',
  perPage: 3
})

// Input amount of food
const foodAmountInt = createSelection([
  { text: 'One' },
  { text: 'Two' },
  { text: 'Three' }
], {
  headerText: 'Select amount: ',
  perPage: 3
})

let foodString = "nothing"
let foodTimeTotal = 0
switch (foodSelectedInt.selectedIndex) {
case 0:
  foodString = "sub"
  foodTimeTotal = 60
  break
case 1:
  foodString = "pizza"
  foodTimeTotal = 45
  break
case 2:
  foodString = "soup"
  foodTimeTotal = 105
  break
}

foodTimeTotal = foodTimeTotal * (1 + (0.5 * foodAmountInt.selectedIndex))
const foodAmount = foodAmountInt.selectedIndex + 1
const foodTimeMinutes = Math.floor(foodTimeTotal / 60)
const foodTimeSeconds = foodTimeTotal - (60 * foodTimeMinutes)

console.log(`Total cook time for ${foodAmount} ${foodString}(s) is ${foodTimeMinutes} minute(s) and ${foodTimeSeconds} seconds.`)

// Show the program as done
console.log('\nDone.')

