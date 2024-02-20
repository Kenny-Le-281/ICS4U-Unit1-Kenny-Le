/*
 * Hello World program
 *
 * @author  Kenny Le
 * @version 1.0
 * @since   2020-01-01
 */

/**
 * This is the standard "Hello, World!" program.
 */
final class HelloWorld {
    /**
     * Prevent instantiation.
     * Throw an exception IllegalStateException.
     * if this is ever called
     *
     * @throws IllegalStateException if this is ever called
     *
     */
    private HelloWorld() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * The starting main() function.
     *
     * @param args No args will be used
     */
    public static void main(final String[] args) {
	    System.out.println("Hello, World!");

	    System.out.println("\nDone.");
    }
}
