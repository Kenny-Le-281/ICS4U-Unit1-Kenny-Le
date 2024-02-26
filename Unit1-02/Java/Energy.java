import java.util.InputMismatchException;
import java.util.Scanner;

/*
* This program calculates energy using
* Einsteins equation.
*
* @author  Kenny Le
* @version 1.0
* @since   2024-02-21
*/

/**
 * This program calculates the energy (E) using Einstein's equation E = mc^2.
 */

final class Energy {

    /**
     * Constants.
     */
    public static final int SPEED_OF_LIGHT = 299792458;

    /**
    * Prevent instantiation.
    * Throw an exception IllegalStateException
    * if this is ever called.
    *
    * @throws IllegalStateException if this is ever called
    */
    private Energy() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * The starting main() function.
     *
     * @param args No args will be used
     */

    public static void main(final String[] args) {
        try {
            final Scanner input = new Scanner(System.in);
            System.out.print("Enter the mass of the object in kilograms: ");
            final double mass = input.nextDouble();
            final double energy = mass * Math.pow(SPEED_OF_LIGHT, 2);
            System.out.println(mass + "kg of mass would produce "
                            + String.format("%.6e", energy) + "J of energy.");
            input.close();
        } catch (InputMismatchException ex) {
            System.out.println("Invalid Input!");
        }

        // Show the program is done
        System.out.println("\nDone.");
    }
}

