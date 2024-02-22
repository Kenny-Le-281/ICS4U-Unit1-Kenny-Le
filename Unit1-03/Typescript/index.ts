/**
 * This program calculates energy using 
 * Einstein's equation
 * By: Kenny Le
 * Version: 1.0
 * Since:   2024-02-16
 */

import { createPrompt } from 'bun-promptx'

// variables
const subTime = 1
const pizzaTime = 0.45
const soupTime = 1.45

// input
const foodChoice= createPrompt("Are you heating sub, pizza, or soup?: ")
const quantityFood = createPrompt("How many " (foodchoice) "(s) are you cooking?(max:3): ")
const acceptableWords = ['sub', 'pizza', 'soup'];

if (acceptableWords.includes(userInput)) {
    console.log("Valid input");
} else {
    console.log("Invalid input");
  }
 
console.log("\nDone.")
