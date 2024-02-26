/**
 * The program shows how many logs
 * 	the truck can hold
 *
 * By:	Kenny Le
 * Version: 1.0
 * Since: 2024-02-16
 */

import { createPrompt } from 'bun-promptx'

const logTruckLimit = 1100
const logWeight = 20

console.log("Choose the length of logs that you would like to move with a truck.")

const lengthOfLog = createPrompt('Enter the length of the logs in meters --> 0.25, 0.5, 1: ')

let logWeightTotal = Number(lengthOfLog.value) * logWeight
let numberOfLogs = logTruckLimit / logWeightTotal

console.log(`The truck can carry ${String(numberOfLogs)} logs that are ${Number(lengthOfLog.value)} meters long.`)

console.log('\nDone.')

