/* This program calculates the number of logs
 the truck can carry
 *
 * @author  Kenny Le
 * @version 1.0
 * @since   2024-02-17
*/

import java.util.Scanner;

public class Log {
	public static final int LOGGING_TRUCK_LIMIT = 1100;
	public static final int MASS_OF_LOGS = 20;

	public static void main(final String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("Choose the length of the logs that you would like to move with a truck. ");
		System.out.print("Enter the length of logs in meters between-> 0.25,  0.5, 1: ");

		double length = sc.nextDouble();

		sc.close();

		double logWeightTotal = length * MASS_OF_LOGS;
		double numberOfLogs = LOGGING_TRUCK_LIMIT / logWeightTotal;

		System.out.println("The truck can carry: " + numberOfLogs + " logs at " + length + " meters");

		System.out.println("\nDone.");
	}
}

	  
